require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8008;
const projects = require("./projects.json");
const about = require("./about.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("I AM ROOT");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.listen(PORT, () => console.log(`Live on Port: ${PORT}`));
