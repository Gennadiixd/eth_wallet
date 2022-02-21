import express from "express";
import {
  createWalletController,
  getWalletController,
  getWalletsController,
} from "./wallet-controller";
import { WalletRepository } from "./wallet-repository";
import { getWallet, getWallets, saveWallet } from "./wallet-service";
import {
  getETHBalance,
  createETHWallet,
} from "../../lib/eth-network/eth-service";

const walletRouter = express.Router();
const walletRepository = new WalletRepository();

walletRouter.get(
  "/",
  getWalletsController(getWallets(walletRepository))(getETHBalance)
);

walletRouter.get(
  "/get/:id",
  getWalletController(getWallet(walletRepository))(getETHBalance)
);

walletRouter.get(
  "/create",
  createWalletController(saveWallet(walletRepository))(createETHWallet)
);

export default walletRouter;
