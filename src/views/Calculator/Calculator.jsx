import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  Tab,
  Tabs,
  Typography,
  Slider,
  Zoom,
} from "@material-ui/core";
import NewReleases from "@material-ui/icons/NewReleases";
import RebaseTimer from "../../components/RebaseTimer/RebaseTimer";
import TabPanel from "../../components/TabPanel";
import { getOhmTokenImage, getTokenImage, trim } from "../../helpers";
import { changeApproval, changeStake } from "../../slices/StakeThunk";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./calculator.scss";
import { useWeb3Context } from "src/hooks/web3Context";
import { isPendingTxn, txnButtonText } from "src/slices/PendingTxnsSlice";
import { Skeleton } from "@material-ui/lab";
import ExternalStakePool from "./ExternalStakePool";
import { error } from "../../slices/MessagesSlice";
import { ethers } from "ethers";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const sOhmImg = getTokenImage("sohm");
const ohmImg = getOhmTokenImage(16, 16);

function Calculator() {
  const dispatch = useDispatch();
  const { provider, address, connected, connect, chainID } = useWeb3Context();

  const [zoomed, setZoomed] = useState(false);
  const [view, setView] = useState(0);
  const [quantity, setQuantity] = useState("");

  const [potentialReturn, setPotentialReturn] = useState("0");
  const [rewardsEstimation, setRewardsEstimation] = useState("0");
  const [days, setDays] = useState(30);
  const isAppLoading = useSelector(state => state.app.loading);
  const currentIndex = useSelector(state => {
    return state.app.currentIndex;
  });
  const fiveDayRate = useSelector(state => {
    return state.app.fiveDayRate;
  });
  const ohmBalance = useSelector(state => {
    return state.account.balances && state.account.balances.ohm;
  });
  const oldSohmBalance = useSelector(state => {
    return state.account.balances && state.account.balances.oldsohm;
  });
  const sohmBalance = useSelector(state => {
    return state.account.balances && state.account.balances.sohm;
  });
  const fsohmBalance = useSelector(state => {
    return state.account.balances && state.account.balances.fsohm;
  });
  const wsohmBalance = useSelector(state => {
    return state.account.balances && state.account.balances.wsohm;
  });
  const stakeAllowance = useSelector(state => {
    return state.account.staking && state.account.staking.ohmStake;
  });
  const unstakeAllowance = useSelector(state => {
    return state.account.staking && state.account.staking.ohmUnstake;
  });
  const stakingRebase = useSelector(state => {
    return state.app.stakingRebase;
  });
  const stakingAPY = useSelector(state => {
    return state.app.stakingAPY;
  });
  const stakingTVL = useSelector(state => {
    return state.app.stakingTVL;
  });

  const marketPrice = useSelector(state => {
    return state.app.marketPrice;
  });

  const pendingTransactions = useSelector(state => {
    return state.pendingTransactions;
  });



  const setMax = () => {
    if (view === 0) {
      setQuantity(ohmBalance);
    } else {
      setQuantity(sohmBalance);
    }
  };

  const onSeekApproval = async token => {
    await dispatch(changeApproval({ address, token, provider, networkID: chainID }));
  };

  const onChangeStake = async action => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(quantity) || quantity === 0 || quantity === "" || !quantity) {
      // eslint-disable-next-line no-alert
      return dispatch(error("Please enter a value!"));
    }

    // 1st catch if quantity > balance
    let gweiValue = ethers.utils.parseUnits(quantity, "gwei");
    if (action === "stake" && gweiValue.gt(ethers.utils.parseUnits(ohmBalance, "gwei"))) {
      return dispatch(error("You cannot stake more than your CST balance."));
    }

    if (action === "unstake" && gweiValue.gt(ethers.utils.parseUnits(sohmBalance, "gwei"))) {
      return dispatch(error("You cannot unstake more than your sCST balance."));
    }

    await dispatch(changeStake({ address, action, value: quantity.toString(), provider, networkID: chainID }));
  };

  const hasAllowance = useCallback(
    token => {
      if (token === "ohm") return stakeAllowance > 0;
      if (token === "sohm") return unstakeAllowance > 0;
      return 0;
    },
    [stakeAllowance],
  )

  let modalButton = [];

  modalButton.push(
    <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
      Connect Wallet
    </Button>,
  )

  const changeView = (event, newView) => {
    setView(newView);
  }

  const trimmedBalance = Number(
    [sohmBalance, fsohmBalance, wsohmBalance]
      .filter(Boolean)
      .map(balance => Number(balance))
      .reduce((a, b) => a + b, 0)
      .toFixed(4),
  );

  const trimmedStakingAPY = trim(stakingAPY * 100, 1);
  const [calcAPY, setCalcAPY] = useState(trimmedStakingAPY);
  const trimmedCSTBalance = trim(Number(ohmBalance), 6);
  const trimeMarketPrice = trim(marketPrice, 2);
  const [futureMarketPrice, setFutureMarketPrice] = useState(trimeMarketPrice);
  const stakingRebasePercentage = trim(stakingRebase * 100, 4);
  const nextRewardValue = trim((stakingRebasePercentage / 100) * trimmedBalance, 4);
  const [priceAtPurchase, setPriceAtPurchase] = useState(trimeMarketPrice);
  const [cstAmount, setCSTAmount] = useState(trimmedCSTBalance);
  const [rewardYield, setRewardYield] = useState(trimmedStakingAPY);

  const calcInitialInvestment = () => {
    const cst = Number(cstAmount) || 0;
    const price = parseFloat(priceAtPurchase) || 0;
    const amount = cst * price;
    return trim(amount, 2);
  };

  const calcCurrentWealth = () => {
    const cst = Number(cstAmount) || 0;
    const price = parseFloat(trimeMarketPrice);
    const amount = cst * price;
    return trim(amount, 2);
  };


  const calcNewBalance = () => {
    let value = parseFloat(rewardYield) / 100;
    value = Math.pow(value - 1, 1 / (365 * 3)) - 1 || 0;
    let balance = Number(cstAmount);
    for (let i = 0; i < days * 3; i++) {
      balance += balance * value;
    }
    return balance;
  };
  const [initialInvestment, setInitialInvestment] = useState(calcInitialInvestment());

  useEffect(() => {
    const newInitialInvestment = calcInitialInvestment();
    setInitialInvestment(newInitialInvestment);
  }, [cstAmount, priceAtPurchase, calcAPY]);


  useEffect(() => {
    const newBalance = calcNewBalance();
    setRewardsEstimation(trim(newBalance, 6));
    const newPotentialReturn = newBalance * (parseFloat(futureMarketPrice) || 0);
    setPotentialReturn(trim(newPotentialReturn, 2));
  }, [days, rewardYield, futureMarketPrice, cstAmount, calcAPY]);

  return (
    <div id="stake-view">
      <Zoom in={true} onEntered={() => setZoomed(true)}>
        <Paper className={`ohm-card`}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <div className="card-header">
                <Typography variant="h5">Calculator</Typography>
                <div>Estimate Your Returns</div>

                {address && oldSohmBalance > 0.01 && (
                  <Link
                    className="migrate-sohm-button"
                    style={{ textDecoration: "none" }}
                    href=""
                    aria-label="migrate-sohm"
                    target="_blank"
                  >
                    <NewReleases viewBox="0 0 24 24" />
                    <Typography>Migrate sCST!</Typography>
                  </Link>
                )}
              </div>
            </Grid>

            <Grid item>
              <div className="stake-top-metrics">
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="stake-apy">
                      <Typography variant="h5" color="textSecondary">
                        APY
                      </Typography>
                      <Typography variant="h4">
                        {trimmedStakingAPY ? (
                          <>{new Intl.NumberFormat("en-US").format(trimmedStakingAPY)}%</>
                        ) : (
                          <Skeleton width="150px" />
                        )}
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="stake-tvl">
                      <Typography variant="h5" color="textSecondary">
                        Total Value Deposited
                      </Typography>
                      <Typography variant="h4">
                        {stakingTVL ? (
                          new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }).format(stakingTVL)
                        ) : (
                          <Skeleton width="150px" />
                        )}
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="stake-index">
                      <Typography variant="h5" color="textSecondary">
                        Current Index
                      </Typography>
                      <Typography variant="h4">
                        {currentIndex ? <>{trim(currentIndex, 1)} CST</> : <Skeleton width="150px" />}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                    <div>
                      <p>CST Amount</p>
                    </div>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      type="number"
                      placeholder="0"
                      value={cstAmount}
                      onChange={e => setCSTAmount(e.target.value)}
                      // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      labelWidth={0}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button variant="text" onClick={setMax}>
                            Max
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                    <div>
                      <p>APY(%)</p>
                    </div>

                    <OutlinedInput
                      type="number"
                      value={rewardYield}
                      labelWidth={0}
                      onChange={e => setRewardYield(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button variant="text" onClick={() => setRewardYield(trimmedStakingAPY)}>
                            Current
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                    <div>
                      <p>CST price at purchase ($)</p>
                    </div>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      type="number"
                      placeholder="0"
                      value={priceAtPurchase}
                      onChange={e => setPriceAtPurchase(e.target.value)}
                      // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      labelWidth={0}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button variant="text" onClick={setMax}>
                            Current
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                    <div>
                      <p>Future CST market price ($)</p>
                    </div>
                    <OutlinedInput
                      type="number"
                      value={futureMarketPrice}
                      onChange={e => setFutureMarketPrice(e.target.value)}
                      // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      labelWidth={0}
                      endAdornment={
                        <InputAdornment position="end">
                          <Button variant="text" onClick={setMax}>
                            Current
                          </Button>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div>
                    <p className="calculator-days-slider-wrap-title">{`${days} day${days > 1 ? "s" : ""}`}</p>
                  </div>
                  <Slider className="calculator-days-slider" min={1} max={365} value={days} onChange={(e, newValue) => setDays(newValue)} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography variant="h6">Your initial investment</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  {isAppLoading ? <Skeleton width="80px" /> : <Typography variant="h6" align={"right"}>${initialInvestment}</Typography>}
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography variant="h6">Current wealth</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  {isAppLoading ? <Skeleton width="80px" /> : <Typography variant="h6" align={"right"}>${calcCurrentWealth()}</Typography>}
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography variant="h6">CST rewards estimation</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography variant="h6" align={"right"}>{isAppLoading ? <Skeleton width="80px" /> : <>{trim(rewardsEstimation, 2)} CST</>}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography variant="h6">Potential return</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography variant="h6" align={"right"}>{isAppLoading ? <Skeleton width="80px" /> : <>${potentialReturn}</>}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography variant="h6">Potential number of lambos</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography variant="h6" align={"right"}>{isAppLoading ? <Skeleton width="80px" /> : <>{Math.floor(Number(potentialReturn) / 220000)}</>}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Zoom>

      {/* <ExternalStakePool /> */}
    </div>
  );
}

export default Calculator;
