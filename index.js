const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const expressSanitizer = require("express-sanitizer");
const db = require("./Config/Database");

const app = express();

const routes = require("./Routes/index");

try {
  db.authenticate();
  console.log("Connection has been established successfully.");
  // db.sync(); // sync database
} catch (error) {
  console.log("Connection Error : ", error);
}
// agar tidak error cors
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
