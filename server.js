const express = require("express");
const app = express();
const path = require("path");
const PORT = 3004;
// const queries = require("./db/queries");

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/", (req, res) => {
  // run your query here
  res.send("hello from the server!");
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
