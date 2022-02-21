import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists("wallets", function (table) {
    table.increments("id").primary();
    table.string("address");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("wallets");
}
