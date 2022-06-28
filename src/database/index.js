import { Client } from "pg";
import "dotenv/config";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        host: "localhost",
        port: 5431,
        user: "tiago",
        database: "products_management",
        password: "123",
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log(`Conectado com sucesso ao banco de dados!`);
};

export default database;
