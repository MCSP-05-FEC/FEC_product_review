const express = require("express");
require('dotenv').config();
const app = express();
const path = require("path");
const PORT = 3004;
const db = require("./db/queries");
const cors = require("cors");

var body = require('body-parser');

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(body.urlencoded({extended: false}));
app.use(body.json());
app.use(cors());

app.get("/targets", (req, res) => {
  // run your query here
  db.query('SELECT * FROM products', (err, data) => {
      if(err){
        console.log(err);
      } else {
        // console.log(data);
        res.send(data);
      }
  })
});

app.get("/targets/:targets_id", (req, res) => {
  // run your query here
  const id=Number(req.params.targets_id);
  db.query('SELECT * FROM products WHERE id=$1', [id], (err, data) => {
      if(err){
        console.log(err);
      } else {
        // console.log(data);
        res.send(data);
      }
  })
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
