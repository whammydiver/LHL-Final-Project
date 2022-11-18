// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');



// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
// The :status token will be colored red for server error codes, yellow for client
// error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'session',
  keys: ['fantasticMrFox']
}));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const customerRoutes = require("./routes/customers");
const navigationRoutes = require("./routes/navigation");
const renderMenuRoutes = require("./routes/renderMenu");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/customers", customerRoutes(db));
app.use("/api/navigation", navigationRoutes(db));
app.use("/api/renderMenu", renderMenuRoutes(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const customerCookie = req.session.customerCookie;
  res.render("index", {customerCookie});
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

