var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('noticia/rerun/index', { title: 'Rerun de Banners' });
});

module.exports = router;
