const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const mongoose = require("./config/db");
const users = require("./data/user");
const products = require("./data/products");
const express = require("express");
const cors = require("cors");
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    console.log(sampleProducts);

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
