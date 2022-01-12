var express = require('express');
var router = express.Router();

let patientCtrl = require('../controllers/patient');

router.get('/', patientCtrl.index);
router.post('/new', patientCtrl.new);

module.exports = router;
