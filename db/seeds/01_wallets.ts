import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("wallets").del();

  await knex("wallets").insert([
    {
      address: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
    },
    {
      address: "0x00000000219ab540356cbb839cbe05303d7705fa",
    },
    {
      address: "0x7326DFF2D832a943F0772d27bf49392Eeaaa551b",
    },
  ]);
}
