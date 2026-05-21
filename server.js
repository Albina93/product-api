require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const connectDB = require("./db/connection");

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
