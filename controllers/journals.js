const Journal = require('../models/journal');

function journalIndex(res, req, next) {
    const journals = Journal.getAll()

    res.render('journals/index', { journals}); 
}