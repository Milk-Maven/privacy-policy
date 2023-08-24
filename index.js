const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.sendFile("./index.html");
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
