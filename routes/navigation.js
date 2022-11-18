const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/", (req, res) => {
    //const customerCookie = req.session.customerCookie;
    // res.render("index", {customerCookie});
    res.render("index");
  });

  router.get("/menu", (req, res) => {
    // const customerCookie = req.session.customerCookie;
    // res.render("urls_menu", {customerCookie});
    res.render("urls_menu");
  });

  router.get("/menu/:meal", (req, res) => {
    // const customerCookie = req.session.customerCookie;
    // res.render("FullPageMenuItem", {customerCookie});
    res.render("FullPageMenuItem");
  });

  router.get("/login", (req, res) => {
    // const customerCookie = req.session.customerCookie;
    // res.render("Login", {customerCookie});
    res.render("Login");
  });

  router.get("/logout", (req, res) => {
    req.session = null;
    //res.render("index", {customerCookie: undefined});
    res.render("index");
  })

  router.get("/signup", (req, res) => {
    // const customerCookie = req.session.customerCookie;
    // res.render("SignUp", {customerCookie});
    res.render("SignUp");
  });

//etc ...



  return router;

};
