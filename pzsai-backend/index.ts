import express from "express";
import "reflect-metadata";
import { Like } from "typeorm";
// @ts-ignore
import { myDataSource } from "./src/db-utils/config.ts";
// @ts-ignore
import Product from "./src/entity/product.ts";
// @ts-ignore
import cors from "cors";

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
const port = 3000;

app.use(cors());

app.get("/", async (req: any, res: any) => {
  console.log(req.query.search);
  const products = await myDataSource.getRepository(Product).find({
    where: {
      title: Like(`%${req.query.search}%`),
    },
  });

  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
