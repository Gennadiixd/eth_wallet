import { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } from "./config";

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USERNAME,
      password: DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
