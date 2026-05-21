const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  tags: { type: [String] },
  createdAt: { type: Date, default: Date.now }, //(no parens) Mongoose calls the function fresh each time a product is created
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
