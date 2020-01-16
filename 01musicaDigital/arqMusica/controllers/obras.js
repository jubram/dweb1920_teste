const Obras = require('../models/obras');

module.exports.listar = (req, res) => {
    if(req.query.compositor) {
        const obras = Obras.find({
            compositor: req.query.compositor
        })
        .then((obras) => {
            return res.status(200).jsonp({ obras });
        })
        .catch(err => {
            console.log(err);
            return res.status(400).jsonp({
                error: err
            });
        });
    } else if(req.query.instrumento) {
        const obras = Obras.find({
            "instrumentos.designacao": req.query.instrumento
        })
        .then((obras) => {
            return res.status(200).jsonp({ obras });
        })
        .catch(err => {
            console.log(err);
            return res.status(400).jsonp({
                error: err
            });
        });
    } else {
        const obras = Obras.find()
            .select('_id titulo tipo compositor')
            .then((obras) => {
                return res.status(200).jsonp({ obras });
            })
            .catch(err => {
                console.log(err);
                return res.status(400).jsonp({
                    error: err
                });
            });
    }
};

module.exports.detalhes = (req, res) => {
    const obra = Obras
        .findOne({ _id: req.params.id })
        .then((obra) => {
            return res.status(200).jsonp({ obra });
        })
        .catch(err => {
            console.log(err);
            return res.status(400).jsonp({
                error: err
            });
        });
};

module.exports.tipos = (req, res) => {
    const tipos = Obras.distinct('tipo')
        .then((tipos) => {
            return res.status(200).jsonp({ tipos });
        })
        .catch(err => {
            console.log(err);
            return res.status(400).jsonp({
                error: err
            });
        });
};