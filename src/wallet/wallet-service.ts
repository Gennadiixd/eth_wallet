import { GetWalletDTO } from "./dto/get-wallet-dto";
import { IWalletRepository } from "./ports";
import { CreatedWallet, Wallet } from "./wallet";

export const getWallet =
  (walletRepository: IWalletRepository) =>
  async (getWalletDTO: GetWalletDTO): Promise<Wallet | undefined> => {
    const walletId = getWalletDTO.id;
    return await walletRepository.findOne(walletId);
  };

export const saveWallet =
  (walletRepository: IWalletRepository) =>
  async (wallet: CreatedWallet): Promise<Wallet> => {
    const createdWalletEntity = walletRepository.create(wallet);
    const savedWallet = await walletRepository.save(createdWalletEntity);
    return savedWallet;
  };

export const getWallets =
  (walletRepository: IWalletRepository) =>
  async (): Promise<Wallet[] | undefined> => {
    return await walletRepository.find();
  };
