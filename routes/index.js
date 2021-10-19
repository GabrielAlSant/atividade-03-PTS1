var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Genshin Impact - Uma aventura inesquecível' });
});

module.exports = router;
