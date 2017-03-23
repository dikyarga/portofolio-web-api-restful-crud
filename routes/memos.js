var express = require('express');
var router = express.Router();

let memoController = require('../controllers/memoController')

router.get('/', memoController.index);

router.post('/', memoController.create);

router.put('/:id', memoController.update);

router.get('/checklist/:id', memoController.checklist);

router.get('/uncheck/:id', memoController.uncheck);

router.delete('/:id', memoController.destroy);

module.exports = router;
