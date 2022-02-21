import { NotEmptyString } from "../../lib/types";

export type WalletId = NotEmptyString & { readonly WalletId: unique symbol };

export const WalletId = {
  ofString: (value: string) => {
    NotEmptyString.ofString(value);
    return value as WalletId;
  },
};

export type Wallet = {
  id: number;
  address: string;
};

type BalanceFulfilled = {
  status: "fulfilled";
  value: string | undefined;
};

type BalanceRejected = {
  status: "rejected";
  reason: string;
};

export type WalletWithBalance = {
  id: number;
  address: string;
  balance: BalanceFulfilled | BalanceRejected;
};

export type CreatedWallet = Omit<Wallet, "id">;
