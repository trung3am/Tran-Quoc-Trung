import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserEntity } from "./entities/user";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DATABASE_USER || "postgres",
  password: process.env.DATABASE_PW || "example",
  database: process.env.DATABASE_DB || "code-challenge",
  entities: [UserEntity],
  synchronize: true,
});