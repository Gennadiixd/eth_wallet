import { WalletId } from "../wallet";

export class GetWalletDTO {
  id: WalletId;
  constructor({ id }: { id: string }) {
    this.id = WalletId.ofString(id);
  }
}
