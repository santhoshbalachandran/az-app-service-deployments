const express = require("express");
const app = express();

app.use(express.static("../frontend"));

app.get("/api", (req, res) => {
  res.send("API working");
});

app.listen(3000, () => console.log("Server running"));