import express from "express";
import Product from "../../models/FoodBasket/product.model.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello");
});

export default router;
