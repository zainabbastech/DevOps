const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

// Apply CORS middleware
app.use(cors());

app.get("/api", (req, res) => {
  console.log("hey");
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
