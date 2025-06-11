import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  alt: { type: String, required: true },
});

const variantSchema = new mongoose.Schema({
  storage: { type: String, required: true },
  price: { type: Number, required: true },
});

const specificationsSchema = new mongoose.Schema({
  display: { type: String, required: true },
  processor: { type: String, required: true },
  storage: [{ type: String, required: true }],
  camera: { type: String, required: true },
  os: { type: String, required: true },
});

const productSchema = new mongoose.Schema(
  {
    product_id: { type: String, required: true, unique: true },
    parent_category: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: "USD" },
    stock_quantity: { type: Number, default: 0 },
    images: [imageSchema],
    specifications: specificationsSchema,
    brand: { type: String, required: true },
    color: [{ type: String, required: true }],
    variants: [variantSchema],
    reviews: [{ type: mongoose.Schema.Types.Mixed }],
    related_products: [{ type: String }],
    sold_quantity: [{ type: Number }],
  },
  { timestamps: true }
);

export const ProductS = mongoose.model("products", productSchema);
