const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.send("API working");
});

// app.use(express.static("../frontend"));

// static frontend
app.use(express.static(path.join(__dirname, "..", "frontend")));

const port = process.env.PORT || 3000

app.listen(port, () => console.log("Server running"));