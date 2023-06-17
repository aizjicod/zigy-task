var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // localStorage.getItem('Data', JSON.stringify(data));
  res.render('display', { data: [`data`] });
});

module.exports = router;
