const dotenv = require("dotenv");
dotenv.config(); // Panggil dotenv.config() di sini, sebelum yang lain

const express = require("express");
const router = require("./Routes/index.js");
const db = require("./Config/Database"); // Database sekarang bisa mengakses variabel lingkungan

const app = express();

//Connection to Dtabase
try {
  db.authenticate();
  console.log("Connection has been established successfully.");
  // db.sync({ alter: true });
} catch (error) {
  console.log("Connection Error : ", error);
}

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);

  console.log("Database:", process.env.DATABASE);
  console.log("Username:", process.env.USERNAME);
  console.log("Host:", process.env.HOSTNAME);
  console.log("Port:", process.env.PORT);
});
