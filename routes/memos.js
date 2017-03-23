var express = require('express');
var router = express.Router();

let memoController = require('../controllers/memoController')

router.get('/', memoController.index);

router.post('/', memoController.create);

router.put('/:id', memoController.update);

router.delete('/:id', memoController.destroy);

module.exports = router;
