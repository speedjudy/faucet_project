import { ethers } from "ethers";
import { addresses } from "../constants";
import { abi as ierc20Abi } from "../abi/IERC20.json";
import { abi as PresaleAbi } from "../abi/Presale.json";
import { abi as FairLaunch } from "../abi/FairLaunch.json";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccountSuccess, getBalances } from "./AccountSlice";
import { clearPendingTxn, fetchPendingTxns } from "./PendingTxnsSlice";
import { error } from "../slices/MessagesSlice";
import { IPurchaseCSTPAsyncThunk, IPurchaseCSTAsyncThunk, IBaseAddressAsyncThunk, IJsonRPCError } from "./interfaces";
import { loadAccountDetails } from "./AccountSlice";


export const changeApproval = createAsyncThunk(
  "presale/changeApproval",
  async ({ provider, address, networkID }: IBaseAddressAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const signer = provider.getSigner();
    const daiContract = new ethers.Contract(addresses[networkID].DAI_ADDRESS as string, ierc20Abi, signer);
    let approveTx;

    try {
      approveTx = await daiContract.approve(
        addresses[networkID].FAIRLAUNCH_ADDRESS,
        ethers.utils.parseUnits("1000000000", "ether").toString(),
      );
      const text = "Approve Presale";
      const pendingTxnType = "approve_presale";
      dispatch(fetchPendingTxns({ txnHash: approveTx.hash, text, type: pendingTxnType }));

      await approveTx.wait();
    } catch (e: unknown) {
      dispatch(error((e as IJsonRPCError).message));
      return;
    } finally {
      if (approveTx) {
        dispatch(clearPendingTxn(approveTx.hash));
      }
    }

    const daiFaiLaunchAllownace = await daiContract.allowance(address, addresses[networkID].FAIRLAUNCH_ADDRESS);
    console.log('daiFaiLaunchAllownace+2', daiFaiLaunchAllownace);
    return dispatch(
      fetchAccountSuccess({
        presale: {
          daiFaiLaunchAllownace: +daiFaiLaunchAllownace,
        },
      }),
    );
  },
);

export const purchaseCSTP = createAsyncThunk(
  "presale/purchaseCSTP",
  async ({ amount, provider, address, networkID }: IPurchaseCSTPAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const signer = provider.getSigner();
    const presaleContract = new ethers.Contract(addresses[networkID].PRESALE_ADDRESS as string, PresaleAbi, signer);
    let approveTx;

    try {
      approveTx = await presaleContract.purchaseCSTP(
        ethers.utils.parseUnits(amount.toString(), "ether")
      );

      const text = "Approve Presale";
      const pendingTxnType = "buy_presale";
      dispatch(fetchPendingTxns({ txnHash: approveTx.hash, text: pendingTxnType, type: pendingTxnType }));

      await approveTx.wait();
      dispatch(loadAccountDetails({ networkID, address, provider }));
    } catch (e: unknown) {
      const errMsg = (e as IJsonRPCError).message;
      dispatch(error("errMsg"));
      return;
    } finally {
      if (approveTx) {
        dispatch(clearPendingTxn(approveTx.hash));
      }
    }

  },
);


export const purchaseCST = createAsyncThunk(
  "presale/purchaseCST",
  async ({ amount, provider, address, networkID }: IPurchaseCSTAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const signer = provider.getSigner();
    const fairLaunchContract = new ethers.Contract(addresses[networkID].FAIRLAUNCH_ADDRESS as string, FairLaunch, signer);
    let approveTx;
    try {
      approveTx = await fairLaunchContract.deposit(address, ethers.utils.parseUnits(amount.toString(), "ether")
      );

      const text = "Approve Presale";
      const pendingTxnType = "buy_presale";
      dispatch(fetchPendingTxns({ txnHash: approveTx.hash, text: pendingTxnType, type: pendingTxnType }));

      await approveTx.wait();
      dispatch(loadAccountDetails({ networkID, address, provider }));
    } catch (e: unknown) {
      const errMsg = (e as IJsonRPCError).message;
      if (errMsg.includes("only whitelisted"))
        dispatch(error("Your account has not been whitelisted. Please contact Manager."));
      else if (errMsg.includes("exceed limit"))
        dispatch(error("Sorry. You exceed limit"));
      else
        dispatch(error("Purchase failed."));
      console.log(errMsg);
      return;
    } finally {
      if (approveTx) {
        dispatch(clearPendingTxn(approveTx.hash));
      }
    }

  },
);


export const redeem = createAsyncThunk(
  "presale/redeem",
  async ({ provider, address, networkID }: IPurchaseCSTAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    console.log("redeem");

    const signer = provider.getSigner();
    const fairLaunchContract = new ethers.Contract(addresses[networkID].FAIRLAUNCH_ADDRESS as string, FairLaunch, signer);
    let approveTx;
    try {
      approveTx = await fairLaunchContract.redeem(address, false);

      const text = "Redeem Presale";
      const pendingTxnType = "redeem_presale";
      dispatch(fetchPendingTxns({ txnHash: approveTx.hash, text: pendingTxnType, type: pendingTxnType }));

      await approveTx.wait();
      dispatch(loadAccountDetails({ networkID, address, provider }));
    } catch (e: unknown) {
      const errMsg = (e as IJsonRPCError).message;
      if (errMsg.includes("not finalized yet"))
        dispatch(error("Fair Launch not finalized yet. Please wait."));
      else if (errMsg.includes("exceed limit"))
        dispatch(error("Sorry. You exceed limit"));
      else
        dispatch(error("Claim failed. Network has a troble. Please again"));
      console.log(errMsg);
      return;
    } finally {
      if (approveTx) {
        dispatch(clearPendingTxn(approveTx.hash));
      }
    }

  },
);
