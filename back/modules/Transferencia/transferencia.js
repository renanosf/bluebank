let express = require("express");
/* eslint-disable */
let conta = express.Router();
/* eslint-enable */

let model = require("./Model/conta-model");
let errorHandling = require("../../lib/errorHandling");
let required = require("./Required/required");
let validator = require("../../lib/validator")(required);

// Validador de Campos
conta.use(validator);

// Insere Conta
conta.put("/", function(req, res) {

	req.body.saldo = 0;

	model.create(req.body)
	.then((response) => {
		res.status(201).json({id: response.dataValues.id});
	})
	.catch((err) => {
		res.status(errorHandling.getStatus(err.errors)).json({err: errorHandling.getText(err.errors)});
	});
});

// Busca Conta
conta.post("/entraConta", function(req, res) {

	model.findOne({where: req.body})
	.then((response) => {
		console.log(response);
		res.status(200).json(response.dataValues);
	})
	.catch((err) => {
		console.log(err);
		res.status(404).json({err: "Não encontrado"});
	});
});

module.exports = conta;
