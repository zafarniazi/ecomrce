const express = require("express");
const products = require("./data/products");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/products", (req, res) => {
  res.send(products);
});
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product._id === productId);
  res.send(product ? product : "no such product with this id");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
