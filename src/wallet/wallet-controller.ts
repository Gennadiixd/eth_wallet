import { Response, Request, NextFunction } from "express";
import { GetWalletDTO } from "./dto/get-wallet-dto";
import {
  CreateETHWallet,
  SaveWallet,
  GetETHBalance,
  GetWallet,
  GetWallets,
} from "./ports";
import { WalletId, WalletWithBalance } from "./wallet";

export const getWalletsController =
  (getWallets: GetWallets) =>
  (getETHBalance: GetETHBalance) =>
  async (
    _req: Request<{ id: WalletId }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const wallets = await getWallets();

      if (!wallets) {
        res.status(404).send();
        return;
      }

      const walletsBalancePromises = wallets.map((wallet) =>
        getETHBalance(wallet.address)
      );

      const balances = await Promise.allSettled(walletsBalancePromises);

      const walletsWithBalance = wallets.reduce<{
        wallets: WalletWithBalance[];
        ttl: number;
      }>(
        (acc, wallet, idx) => {
          const balance = balances[idx];

          if (balance.status === "fulfilled" && balance.value) {
            acc.ttl += parseFloat(balance.value);
          }

          acc.wallets.push({ ...wallet, balance });
          return acc;
        },
        { wallets: [], ttl: 0 }
      );

      res.status(200).json(walletsWithBalance);
    } catch (error) {
      next(error);
    }
  };

export const getWalletController =
  (getWallet: GetWallet) =>
  (getETHBalance: GetETHBalance) =>
  async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const getWalletDTO = new GetWalletDTO(req.params);
      const wallet = await getWallet(getWalletDTO);

      if (!wallet) {
        res.status(404).send();
        return;
      }

      const balance = await getETHBalance(wallet.address);
      res.status(200).json(balance);
    } catch (error) {
      next(error);
    }
  };

export const createWalletController =
  (saveWallet: SaveWallet) =>
  (createETHWallet: CreateETHWallet) =>
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const createdETHWallet = await createETHWallet();
      const wallet = await saveWallet(createdETHWallet);
      res.status(201).json(wallet);
    } catch (error) {
      next(error);
    }
  };
