import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      enum: [
        "g",
        "kg",
        "ml",
        "l",
        "oz",
        "lb",
        "cup",
        "pint",
        "quart",
        "gallon",
      ],
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", schema);

export default Product;
