var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('layout');
});

router.get('/products', (req, res, next) => {
  var db = req.db;
  var collection = db.get('products');
  collection.find({}, {}, (err, docs) => {
      res.json(docs);
  });
});

module.exports = router;
