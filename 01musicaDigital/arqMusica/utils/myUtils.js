const fs = require('fs');
var Obra = require('../models/obras');

function setup_db() {
    let rawdata = fs.readFileSync('arquivo-musica-digital.json');
    let obras = JSON.parse(rawdata);

    obras.forEach(element => {
        var novo = new Obra(element);
        novo.save();
    });
};

module.exports.setup_db = setup_db;