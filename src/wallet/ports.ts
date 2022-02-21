import { GetWalletDTO } from "./dto/get-wallet-dto";
import { CreatedWallet, Wallet, WalletId } from "./wallet";
import { WalletEntity } from "./wallet-entity";

export type IWalletRepository = {
  find: () => Promise<Wallet[] | undefined>;
  findOne: (id: WalletId) => Promise<Wallet | undefined>;
  create: (wallet: CreatedWallet) => WalletEntity;
  save: (walletEntity: WalletEntity) => Promise<Wallet>;
};

export type GetWallet = (
  getWalletDTO: GetWalletDTO
) => Promise<Wallet | undefined>;

export type GetWallets = () => Promise<Wallet[] | undefined>;
export type SaveWallet = (wallet: CreatedWallet) => Promise<Wallet>;

export type GetETHBalance = (ETHAddress: string) => Promise<string | undefined>;
export type CreateETHWallet = () => Promise<CreatedWallet>;
