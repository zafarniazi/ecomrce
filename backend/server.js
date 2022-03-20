const express = require("express");

const cors = require("cors");
const app = express();
const ProuctRoutes = require("./Routes/ProuctRoutes");
const mongoose = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
/* provide 404 response if no routes match */
app.use(cors());

app.use("/api/products", ProuctRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
