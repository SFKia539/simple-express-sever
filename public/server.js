const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.use("/", (req, res) => res.sendFile(path.join(__dirname, "about.html")));

app.use("/", (req, res) => res.sendFile(path.join(__dirname, "404.html")));

const PORT = process.env.port || 4000;
app.listen(4000, () => {
  console.log(`serversrunning localhost:${PORT}`);
});
