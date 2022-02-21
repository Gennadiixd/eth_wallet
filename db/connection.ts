import { createConnection } from "typeorm";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from "../config";

export const connectDB = async () => {
  const connection = await createConnection({
    type: "postgres",
    host: DB_HOST,
    port: parseInt(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [__dirname + "/../**/*-entity{.ts,.js}"],
    synchronize: false,
  });

  return connection;
};

export default connectDB;
