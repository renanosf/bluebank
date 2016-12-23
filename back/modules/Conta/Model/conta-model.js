let Sequelize = require("sequelize");
let sequelize = require("../../../lib/db");

let Conta = sequelize.define("conta", {
	id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	agencia: { type: Sequelize.STRING, allowNull: false, unique: "uniqueConta"},
	conta: { type: Sequelize.STRING, allowNull: false, unique: "uniqueConta"},
	saldo: { type: Sequelize.DECIMAL(15,2), allowNull: false},
});

Conta.sync().then(() => {
});

module.exports = Conta;
