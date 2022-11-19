const express = require('express');
const router  = express.Router();

module.exports = (db) => {


  // if menu exists in DB, call DB
  // else call spoonacular API


  // router.get('/menu/:meal', (req, res) => {
  //   console.log(req.body)
  //   db.query(`SELECT * FROM menu WHERE user_id = $1;`, [req.params.user.id])
  //   .then(data => {
  //     res.send( "data.rows"?? );
  //   })
  // })

  // return router;

};
