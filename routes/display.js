var express = require('express');
var router = express.Router();
var data = require('../module/data')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('display', { data: `${data.items === undefined ? [] : data.items}` });
});

module.exports = router;
