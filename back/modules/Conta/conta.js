let express = require("express");
/* eslint-disable */
let conta = express.Router();
/* eslint-enable */

let model = require("./Model/conta-model");
let errorHandling = require("../../lib/errorHandling");
let responseParser = require("../../lib/responseParser");
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

// Entra em uma Conta
conta.post("/entraConta", function(req, res) {

	model.findOne({where: req.body})
	.then((response) => {
		res.status(200).json(response.dataValues);
	})
	.catch(() => {
		res.status(404).json({err: "Não encontrado"});
	});
});

// Busca Conta
conta.post("/buscaConta", function(req, res) {

	model.findAll({
		where: {
			$or: {
				agencia: {
					$like: req.body.term,
				},
				conta: {
					$like: req.body.term
				}
			}
		}
	})
	.then((response) => {
		res.status(200).json(responseParser(response));
	})
	.catch((err) => {
		console.log(err);
		res.status(422).json({err: "Erro ao buscar no banco"});
	});
});

module.exports = conta;
