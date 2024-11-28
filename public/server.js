const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.use("/", (req, res) => res.sendFile(path.join(__dirname, "about.html")));

app.use("/", (req, res) => res.sendFile(path.join(__dirname, "404.html")));

const PORT = process.env.port || 3000;
app.listen(3000, () => {
  console.log(`serversrunning localhost:${PORT}`);
});
