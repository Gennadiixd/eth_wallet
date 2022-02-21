import { getRepository } from "typeorm";
import { IWalletRepository } from "./ports";
import { CreatedWallet, WalletId } from "./wallet";
import { WalletEntity } from "./wallet-entity";

export class WalletRepository implements IWalletRepository {
  find = async () => {
    const walletRepository = getRepository(WalletEntity);
    return await walletRepository.find();
  };
  findOne = async (id: WalletId) => {
    const walletRepository = getRepository(WalletEntity);
    return await walletRepository.findOne(id);
  };
  create = (wallet: CreatedWallet) => {
    const walletRepository = getRepository(WalletEntity);
    const createdWalletEntity = walletRepository.create(wallet);
    return createdWalletEntity;
  };
  save = async (createdWalletEntity: WalletEntity) => {
    const walletRepository = getRepository(WalletEntity);
    const savedWalletEntity = await walletRepository.save(createdWalletEntity);
    return savedWalletEntity;
  };
}
