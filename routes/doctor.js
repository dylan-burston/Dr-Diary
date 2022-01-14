var express = require('express');
var router = express.Router();

let doctorCtrl = require('../controllers/doctors');

router.get('/', doctorCtrl.index);
router.post('/viewPatientJournal', doctorCtrl.viewPatientJournal);
router.post('/setMeds/:patientId', doctorCtrl.setMeds);
router.post('/newPatient', doctorCtrl.newPatient);
router.delete('/:patientId', doctorCtrl.delete);

module.exports = router;