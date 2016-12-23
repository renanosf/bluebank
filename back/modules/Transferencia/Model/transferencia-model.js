let Sequelize = require("sequelize");
let sequelize = require("../../../lib/db");

let Transferencia = sequelize.define("transferencia", {
	id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
	remetente: { type: Sequelize.STRING, allowNull: false},
	destinatario: { type: Sequelize.STRING, allowNull: false},
	valor: { type: Sequelize.DECIMAL(15,2), allowNull: false},
});

Transferencia.sync().then(() => {
});

module.exports = Transferencia;
