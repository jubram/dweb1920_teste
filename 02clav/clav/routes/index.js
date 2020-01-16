var express = require('express');
var router = express.Router();
var axios = require('axios');

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey='+apiKey)
    .then(dados => {
        res.render('index', { entidades: dados.data });
    })
    .catch(err => {
      res.render('error', {error: err});
    })
});

router.get('/entidade/:id', function(req, res, next) {
  var entidade = {};
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'?apikey='+apiKey)
      .then(dados => {
          entidade.details = dados.data;
          return axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'/tipologias?apikey='+apiKey)
      })
      .then(dados => {
          entidade.tipologias = dados.data;
          return axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'/intervencao/dono?apikey='+apiKey)
      })
      .then(dados => {
          if(dados.data) {
              entidade.donos = dados.data;
          } else {
              entidade.donos = [];
          }
          return axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+req.params.id+'/intervencao/participante?apikey='+apiKey)
      })
      .then(dados => {
          entidade.participantes = dados.data;
          console.log(entidade);
          res.render('detalhes-entidade', { entidade: entidade});
      })
      .catch(err => {
        res.render('error', {error: err})
      });
});

module.exports = router;
