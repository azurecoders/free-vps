import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

// Health Route

app.get("/health", (req, res) => {
  res.json({
    status: 200,
    message: "OK",
    timestamp: new Date().toISOString(),
  });
});

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});
