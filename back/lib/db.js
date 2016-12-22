let Sequelize = require("sequelize");

let sequelize = new Sequelize("bluebank", "root", "mysql", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	logging: false
});

module.exports = sequelize;
