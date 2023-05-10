const express = require("express");

const app = express();
app.get("/about", (req, res) => {
  res.send("Hello about");
});

app.listen(3000, () => {
  console.log("Server is starting...");
});
