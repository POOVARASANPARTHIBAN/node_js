const fs = require("fs");

// STEP 1: Load JSON file
const users = require("./users");

// Defining new user
let user = {
  name: "Steve",
  age: 30,
  language: ["French", "Spanish", "English"],
};

users.push(user);

fs.writeFile("users.json", JSON.stringify(users));
