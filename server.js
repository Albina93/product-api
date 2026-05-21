require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json);
const connectDB = require("./db/connection");
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
