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
  });
});

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});
