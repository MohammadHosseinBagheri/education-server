const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const routes = require("./src/routes");

//initial middlewares
app.get('/',(req,res)=>{
  res.send("heroku app")
})
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//initial db
mongoose.connect("mongodb://localhost/osoul");
//initial routes
app.use(routes);
// initial app
app.listen(port, () => console.log("server is running on port 3000"));
