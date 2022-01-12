var express = require('express');
var router = express.Router();

let journalCtrl = require('../controllers/journal');

router.post('/new', journalCtrl.new);
router.get('/:id', journalCtrl.show);

module.exports = router;