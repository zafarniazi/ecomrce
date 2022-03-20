const express = require("express");
const Products = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");
const {
  makeError,
  error404,
  handleRouteErrors,
} = require("../errorhandler/error");

const router = express.Router();
//@zafarniazi - get all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Products.find();
    const data = products ? { products } : makeError("No such person", 404);

    res.json(products);
  })
);

//@zafarniazi - get product by id
router.get(
  "/:id([0-9a-f]{24})",
  asyncHandler(async (req, res) => {
    const products = await Products.findById(req.params.id);
    const data = products ? products : res.send("No such person", 500);
    res.json(data);
  })
);
module.exports = router;
