var express = require('express');
var router = express.Router();

let memoController = require('../controllers/memoController')

router.get('/', memoController.index);

router.post('/', memoController.create);

module.exports = router;
