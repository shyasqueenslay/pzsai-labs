import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "pzsai",
  password: "password",
  database: "pzsaidb",
  entities: ["src/entity/*.ts"],
  logging: false,
  synchronize: false,
});
