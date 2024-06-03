const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get("/version", (req, res) => {
  res.send("New version here"); // change this string to ensure a new version deployed
});

app.get("/health", (req, res) => {
  // eslint-disable-next-line no-constant-condition

  res.send("ok");
});
app.get("test", (req, res) => {
  res.send("test");
});
app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`);
});
