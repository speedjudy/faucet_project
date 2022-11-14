import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Paper, Tab, Tabs, Box, Grid, FormControl, OutlinedInput, InputAdornment } from "@material-ui/core";
import InfoTooltipMulti from "../../components/InfoTooltip/InfoTooltipMulti";

import TabPanel from "../../components/TabPanel";
import CardHeader from "../../components/CardHeader/CardHeader";
import "./presale.scss";
import { addresses, POOL_GRAPH_URLS } from "../../constants";
import { useWeb3Context } from "../../hooks";
import { apolloExt } from "../../lib/apolloClient";
import { isPendingTxn, txnButtonText } from "src/slices/PendingTxnsSlice";
import { calculateOdds } from "../../helpers/33Together";
import { getPoolValues, getRNGStatus } from "../../slices/PoolThunk";
import { purchaseCST, changeApproval, redeem } from "../../slices/Presale";
import { trim } from "../../helpers/index";
import { Typography, Button, Zoom } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { error, info } from "../../slices/MessagesSlice";
import { AboutCard } from "./AboutCard";
import { PresaleCard } from "./PresaleCard";
import { FairLaunchCard } from "./FairLaunchCard";

function a11yProps(index) {
  return {
    id: `pool-tab-${index}`,
    "aria-controls": `pool-tabpanel-${index}`,
  };
}

const MAX_DAI_AMOUNT = 100;

const Presale = () => {
  const [view, setView] = useState(0);

  const changeView = (event, newView) => {
    setView(newView);
  };

  // NOTE (appleseed): these calcs were previously in PoolInfo, however would be need in PoolPrize, too, if...
  // ... we ever were to implement other types of awards
  const { connect, address, provider, chainID, connected, hasCachedProvider } = useWeb3Context();
  const dispatch = useDispatch();
  let history = useHistory();
  const [graphUrl, setGraphUrl] = useState(POOL_GRAPH_URLS[chainID]);
  const [poolData, setPoolData] = useState(null);
  const [poolDataError, setPoolDataError] = useState(null);
  const [graphLoading, setGraphLoading] = useState(true);
  const [walletChecked, setWalletChecked] = useState(false);
  const [winners, setWinners] = useState("--");
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalSponsorship, setTotalSponsorship] = useState(0);
  const [yourOdds, setYourOdds] = useState(0);
  const [yourTotalAwards, setYourTotalAwards] = useState(0);
  const [cstpBalance, setCSTPBalance] = useState(0);
  const [inputBUSDAmount, setBUSDBalance] = useState(0);

  // TODO (appleseed-33T): create a table for AwardHistory
  const [yourAwardHistory, setYourAwardHistory] = useState([]);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState([
    "Deposit sPID to win! Once deposited, you will receive a corresponding amount of 3,3 π and be entered to win until your sPID is withdrawn.",
  ]);
  const isAccountLoading = useSelector(state => state.account.loading ?? true);

  const daiBalance = useSelector(state => {
    return state.account.balances && state.account.balances.dai;
  });

  const daiFaiLaunchAllownace = useSelector(state => {
    return state.account.presale && state.account.presale.daiFaiLaunchAllownace;
  });

  const cstInCirculation = useSelector(state => {
    return state.account.balances && state.account.balances.cstInCirculation;
  });

  const cstpTotalSupply = useSelector(state => {
    return state.account.balances && state.account.balances.cstpTotalSupply;
  });

  const poolBalance = useSelector(state => {
    return state.account.balances && state.account.balances.pool;
  });

  const pendingTransactions = useSelector(state => {
    return state.pendingTransactions;
  });

  const cstPurchaseBalance = useSelector(state => {
    return state.account.presale && state.account.presale.cstPurchaseBalance;
  }) | 0;

  const isFairLunchFinshed = useSelector(state => {
    return state.account.presale && state.account.presale.isFairLunchFinshed;
  });

  const pendingPayoutPresale = useSelector(state => {
    return state.account.presale && state.account.presale.pendingPayoutPresale;
  });

  const vestingPeriodPresale = useSelector(state => {
    return state.account.presale && state.account.presale.vestingPeriodPresale;
  });

  const cstpPrice = 5;

  const setCSTPBalanceCallback = (value) => {
    if ((value * cstpPrice) > MAX_DAI_AMOUNT && (value * cstpPrice) > (MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice)) {
      setBUSDBalance(MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice);
      setCSTPBalance((MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice) / cstpPrice);
    }
    else {
      setCSTPBalance(value);
      setBUSDBalance(value * cstpPrice);
    }
  }

  const setBUSDBalanceCallback = (value) => {
    if (value > MAX_DAI_AMOUNT && value > (MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice)) {
      setBUSDBalance(MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice);
      setCSTPBalance((MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice) / cstpPrice);
    }
    else {
      setBUSDBalance(value);
      setCSTPBalance(value / cstpPrice);
    }
  }


  const setMax = () => {
    if (daiBalance > MAX_DAI_AMOUNT && daiBalance > (MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice))
      setBUSDBalanceCallback(MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice);
    else
      setBUSDBalanceCallback(daiBalance);
  };


  const hasAllowance = useCallback(
    () => {
      return daiFaiLaunchAllownace > 0;
      return 0;
    },
    [daiFaiLaunchAllownace],
  )

  const onPurchaseCST = async action => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(inputBUSDAmount) || inputBUSDAmount === 0 || inputBUSDAmount === "" || !inputBUSDAmount) {
      // eslint-disable-next-line no-alert
      return dispatch(info("Please enter a value!"));
    }

    if (inputBUSDAmount > MAX_DAI_AMOUNT) {
      setBUSDBalanceCallback(MAX_DAI_AMOUNT);
      return dispatch(info("Sorry, You can only make 1 purchase with maximum 100 BUSD"));
    }

    if (inputBUSDAmount > (MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice)) {
      setBUSDBalanceCallback(MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice);
      return dispatch(info("Sorry, You can only make purchase with maximum 100 BUSD"));
    }

    if (inputBUSDAmount > daiBalance) {
      setBUSDBalanceCallback(daiBalance);
      return dispatch(info("Sorry, your BUSD balance is not sufficient to make the purchase"));
    }

    // 1st catch if quantity > balance
    // let gweiValue = ethers.utils.parseUnits(quantity, "gwei");
    // if (gweiValue.gt(ethers.utils.parseUnits(ohmBalance, "gwei"))) {
    //   return dispatch(error("You cannot stake more than your BUSD balance."));
    // }
    console.log("inputBUSDAmount", inputBUSDAmount);
    await dispatch(purchaseCST({ amount: inputBUSDAmount, provider, address, networkID: chainID }));
    setCSTPBalanceCallback(0);
  };

  console.log('MAX_DAI_AMOUNT - cstPurchaseBalance * cstpPrice', cstPurchaseBalance);

  const onClaim = async action => {
    // eslint-disable-next-line no-restricted-globals
    await dispatch(redeem({ provider, address, networkID: chainID }));
  };


  const onSeekApproval = async token => {
    await dispatch(changeApproval({ address, provider, networkID: chainID }));
  };

  // query correct pool subgraph depending on current chain
  useEffect(() => {
    setGraphUrl(POOL_GRAPH_URLS[chainID]);
  }, [chainID]);

  useEffect(() => {
    let userOdds = calculateOdds(poolBalance, totalDeposits, winners);
    setYourOdds(userOdds);
  }, [winners, totalDeposits, poolBalance]);

  useEffect(() => {
    if (hasCachedProvider()) {
      // then user DOES have a wallet
      connect().then(() => {
        setWalletChecked(true);
      });
    } else {
      // then user DOES NOT have a wallet
      setWalletChecked(true);
    }
  }, []);

  // this useEffect fires on state change from above. It will ALWAYS fire AFTER
  useEffect(() => {
    // don't load ANY details until wallet is Checked
    if (walletChecked) {
      dispatch(getPoolValues({ networkID: chainID, provider: provider }));
      dispatch(getRNGStatus({ networkID: chainID, provider: provider }));
    }
  }, [walletChecked]);

  let modalButton = [];

  modalButton.push(
    <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
      Connect Wallet
    </Button>,
  )

  modalButton.push(
    <Button
      className="stake-button"
      variant="contained"
      color="primary"
      disabled={isPendingTxn(pendingTransactions, "buy_presale")}
      onClick={() => {
        onPurchaseCST();
      }}
    >
      {txnButtonText(pendingTransactions, "buy_presale", "Buy")}
    </Button>
  )

  modalButton.push(
    <Button
      className="stake-button"
      variant="contained"
      color="primary"
      disabled={isPendingTxn(pendingTransactions, "approve_presale")}
      onClick={() => {
        onSeekApproval();
      }}
    >
      {txnButtonText(pendingTransactions, "approve_presale", "Approve")}
    </Button>
  )


  let claimButton = [];

  claimButton.push(
    <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
      Connect Wallet
    </Button>,
  )

  claimButton.push(
    <Button
      className="stake-button"
      variant="contained"
      color="primary"
      disabled={isPendingTxn(pendingTransactions, "redeem_presale")}
      onClick={() => {
        onClaim();
      }}
    >
      {txnButtonText(pendingTransactions, "redeem_presale", "Claim")}
    </Button>
  )


  claimButton.push(
    <Button
      className="stake-button"
      variant="contained"
      color="primary"
      disabled={true}
      onClick={() => {
        onClaim();
      }}
    >
      {/*txnButtonText(pendingTransactions, "redeem_presale", "Claim and Stake")*/ "Claim and Stake"}
    </Button>
  )

  return (
    <Zoom in={true}>
      <div id="pool-together-view">
        {
          !isFairLunchFinshed ?
            <PresaleCard
              address={address}
              cstPurchaseBalance={cstPurchaseBalance}
              cstpPrice={cstpPrice}
              cstpTotalSupply={cstpTotalSupply}
              cstInCirculation={cstInCirculation}
              cstpBalance={cstpBalance}
              inputBUSDAmount={inputBUSDAmount}
              modalButton={modalButton}
              setMax={setMax}
              hasAllowance={hasAllowance}
              setCSTPBalanceCallback={setCSTPBalanceCallback}
              setBUSDBalanceCallback={setBUSDBalanceCallback}
            /> :
            <FairLaunchCard
              address={address}
              cstPurchaseBalance={cstPurchaseBalance}
              pendingPayoutPresale={pendingPayoutPresale}
              vestingPeriodPresale={vestingPeriodPresale}
              claimButton={claimButton}
            />
        }
        <AboutCard />
      </div >
    </Zoom>
  );
};

export default Presale;
