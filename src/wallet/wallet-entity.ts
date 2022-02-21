import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "wallets" })
export class WalletEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;
}
