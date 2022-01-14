var express = require('express');
var router = express.Router();

let journalCtrl = require('../controllers/journals');

router.get('/', journalCtrl.index);
router.post('/', journalCtrl.create);
router.get('/:id/edit', journalCtrl.edit);
router.put('/:id', journalCtrl.update);
router.delete('/:id', journalCtrl.delete);
router.get('/new', journalCtrl.new);
router.get('/:id', journalCtrl.show);

module.exports = router;