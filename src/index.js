const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const login = require('../routes/login')
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config/dev.env" });
//connectDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT;

const publicDirectoryPath = path.join(__dirname, "../public");
console.log(publicDirectoryPath)
app.use(express.static(publicDirectoryPath));

app.use('/login', login)
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
