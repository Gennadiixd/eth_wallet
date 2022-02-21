import Web3 from "web3";
import { ETH_NETWORK_CONNECTION_URL } from "../../config";

const provider = new Web3.providers.HttpProvider(ETH_NETWORK_CONNECTION_URL);
const web3 = new Web3(provider);

export const getETHBalance = async (address: string) => {
  const balance = await web3.eth.getBalance(address);
  const ether = web3.utils.fromWei(balance, "ether");
  return ether;
};

export const createETHWallet = async () => {
  const account = web3.eth.accounts.create();
  return account;
};
