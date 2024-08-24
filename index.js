const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const router = require("./Routes/index.js");
const db = require("./Config/Database");
const app = express();
try {
  db.authenticate();
  console.log("Connection has been established successfully.");
  // db.sync();
} catch (error) {
  console.log("Connection Error : ", error);
}

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
