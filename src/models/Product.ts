import mongoose, { Schema, model, models } from "mongoose";

// Mendefinisikan skema untuk Product
const ProductSchema = new Schema({
  productName: { type: String, required: true },
  productDescription: { type: String },
  productPrice: { type: Number, required: true },
  productPhoto: [{ type: String }],
});

// Mengecek jika model dengan nama "Product" sudah ada di `models`, jika tidak, buat model baru
export const Product = models.Product || model("Product", ProductSchema);
