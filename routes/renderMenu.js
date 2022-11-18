const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //this will make the API or DB call for a menu.k 
  router.get('/menu/:meal', (req, res) => {
    console.log(req.body)
    db.query(`SELECT * FROM menu_items WHERE category = $1 ORDER BY id;`, [req.params.category])
    .then(data => {
      res.send(data.rows);
    })
  })

  router.get('/admin/:category', (req, res) => {
    db.query(`SELECT * FROM menu_items WHERE category = $1 ORDER BY id;`, [req.params.category])
    .then(data => {
      res.send(data.rows);
    })
  })

  return router;

};
