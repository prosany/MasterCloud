import express from "express";
import cors from "cors";
import morgan from "morgan";
import Errors from "http-errors";
import mongoose from "mongoose";
import CONFIG from "./configs/index.js";
import checkHost from "./middlewares/Server.js";
import moment from "moment";
import foodBasketProduct from "./controllers/FoodBasket/product.controllers.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", checkHost, async (req, res) => {
  res.status(200).send({
    status: 200,
    message: "MasterCloud Server Up and Running",
    uptime: process.uptime(),
    time: moment.parseZone(Date.now()).local().format("LLLL"),
  });
});

app.use("/v1/foodbasket", foodBasketProduct);

app.listen(CONFIG.PORT, () =>
  console.log(`MasterCloud Running On http://localhost:${CONFIG.PORT}`)
);
