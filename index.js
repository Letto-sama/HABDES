const express = require("express");
const app = express();
const web = require(".")

app.get("/", (req, res) =>res.send("./index.html"));


app.listen(3000);
console.log("Server on port", 3000)