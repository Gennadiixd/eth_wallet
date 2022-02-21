import dotenv from "dotenv";
const { parsed, error } = dotenv.config();

if (error) {
  throw error;
}

if (!parsed) {
  throw new Error("No envs found");
}

export const {
  ETH_NETWORK_CONNECTION_URL,
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
} = parsed;
