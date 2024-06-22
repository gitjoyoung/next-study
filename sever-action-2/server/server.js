const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors()); // cors
app.use(bodyParser.json()); // json

const port = 4000;

let users = [];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: uuidv4(), name, email };
  users.push(newUser);
  res.status(200).json(newUser);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    res.status(404).json({ message: "User not found" });
  } else {
    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
