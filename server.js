// ------------------------------------------------------------------------- setup/vars

const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const app = express();

var routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

const dbURI = process.env.MONGODB_URI || "mongodb://localhost/news";

mongoose.connect(dbURI);

// start the server, listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port" + PORT);
});
