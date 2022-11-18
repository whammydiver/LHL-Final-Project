const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("index", {customerCookie});
  });

  router.get("/menu", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("urls_menu", {customerCookie});
  });

  router.get("/menu/:meal", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("FullPageMenuItem", {customerCookie});
  });

  router.get("/login", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("Login", {customerCookie});
  });

  router.get("/logout", (req, res) => {
    req.session = null;
    res.render("index", {customerCookie: undefined});
  })

  router.get("/signup", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("SignUp", {customerCookie});
  });

  router.get("/order", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("urls_checkout", {customerCookie});
  });

  router.get("/admin", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("admin_features", {customerCookie});
  });

  router.get("/admin/:category", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("admin_features", {customerCookie});
  });

  router.get("/checkout", (req, res) => {
    const customerCookie = req.session.customerCookie;
    res.render("urls_checkout", {customerCookie});
  });



  return router;

};
