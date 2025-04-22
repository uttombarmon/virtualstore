import { Schema, model } from "mongoose";
import PTypes from "../types/PTypes";

const productSchema = new Schema<PTypes>(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    store: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductS = model<PTypes>("products", productSchema);
export default ProductS;
