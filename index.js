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
    author: "azureCoders",
  });
});

// Create one more test route
app.get("/test", (req, res) => {
  res.json({
    status: 200,
    message: "Test route is working",
    timestamp: new Date().toISOString(),
  });
});

// Create one more test route that is useful somewhat
app.get("/info", (req, res) => {
  res.json({
    status: 200,
    message: "Server Info",
    node_version: process.version,
    platform: process.platform,
    uptime: process.uptime(),
    memory_usage: process.memoryUsage(),
    timestamp: new Date().toISOString(),
  });
});

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});
