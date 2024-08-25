const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const db = require("./Config/Database");
const app = express();

const routes = require("./Routes/index");

try {
  db.authenticate();
  console.log("Connection has been established successfully.");
  // db.sync();
} catch (error) {
  console.log("Connection Error : ", error);
}
// agar tidak error cors
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
