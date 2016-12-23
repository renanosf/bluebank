let express = require("express");
/* eslint-disable */
let transferencia = express.Router();
/* eslint-enable */

let model = require("./Model/transferencia-model");
let conta = require("./../Conta/Model/conta-model");
let errorHandling = require("../../lib/errorHandling");
let required = require("./Required/required");
let validator = require("../../lib/validator")(required);

// Validador de Campos
transferencia.use(validator);

// Insere transferencia
transferencia.put("/", function(req, res) {

	let rem = null;
	let des = null;
	let valor = parseFloat(req.body.valor);

	conta.findOne({where: {id: req.body.remetente}})
	.then((response) => {
		console.log(response.dataValues);
		if (response.dataValues.saldo < valor) {
			throw new Error("Saldo Insuficiente")
		} else {
			rem = response;
			return conta.findOne({where : {id: req.body.destinatario}});
		}
	})
	.then((response) => {
		des = response;
		return rem.decrement({saldo : valor});
	})
	.then(() => {
		console.log("Decrementou");
		return des.increment({saldo : valor});
	})
	.then(() => {
		return model.create({
			remetente: req.body.remetente,
			destinatario: req.body.destinatario,
			valor: valor
		});
	})
	.then((response) => {
		res.status(201).json({id: response.dataValues.id});
	})
	.catch((err) => {
		console.log(err);
		res.status(409).json({err : "Não foi possivel concluir essa transacao"});
	});

});

module.exports = transferencia;
