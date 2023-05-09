const express = require("express");

const app = express();
app.get("/about", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server is starting...");
});
