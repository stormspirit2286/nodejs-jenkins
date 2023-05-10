const express = require("express");

const app = express();
app.get("/contact", (req, res) => {
  res.send("Hello contact");
});

app.listen(3000, () => {
  console.log("Server is starting...");
});
