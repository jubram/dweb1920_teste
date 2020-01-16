const mongoose = require('mongoose');

const obraSchema = new mongoose.Schema({
    _id: String,
    titulo: String,
    tipo: String,
    compositor: String,
    arranjo: String,
    instrumentos: [
        {
            designacao: String,
            partitura: Object
        }
    ]
});

module.exports = mongoose.model('Obra', obraSchema);