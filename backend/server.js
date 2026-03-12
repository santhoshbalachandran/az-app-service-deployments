const express = require("express");
const path = require("path");

const app = express();

// API route
app.get("/api", (req, res) => {
  res.send("API working");
});

// serve frontend only on root
app.use("/", express.static(path.join(__dirname, "..", "frontend")));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on " + port);
});