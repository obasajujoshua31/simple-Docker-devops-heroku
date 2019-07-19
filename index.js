const express = require("express");
const database = require("./models");
const dotenv = require("dotenv");
const router = require("./routes");

dotenv.config();
const app = express();

const port = process.env.PORT || 2000;
// initialize database

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

database.sequelize.authenticate().then(() => {
  console.log("Database connected successfully");
});

database.sequelize.sync().then(() => {
  console.log("Tables created successfully");
});

app.get("/", (req, res) => {
  res.send("Welcome to Todo Api");
});

app.use("/api/todo", router);

app.listen(port, () => {
  console.log("Server started at port", port);
});
