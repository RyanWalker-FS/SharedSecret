// app.js
const secrets = require("./secrets.json");

function greetUser(name) {
  return `Hello ${name}, your shared secret is ${secrets.SECRET_KEY}`;
}

console.log(greetUser("Walker"));
