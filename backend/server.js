const express = require("express");
const app = express();

app.use(express.static("../frontend"));

app.get("/api", (req, res) => {
  res.send("API working");
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log("Server running"));