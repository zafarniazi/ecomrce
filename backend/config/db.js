const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connect = process.env.MONGOURI;
mongoose
  .connect(connect, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to db");
  });
module.exports = mongoose;
