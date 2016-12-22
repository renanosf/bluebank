module.exports = {
	"/": {
		"PUT": {
			agencia: "string",
			conta: "string",
		}
	},
	"/entraConta": {
		"POST": {
			agencia: "string",
			conta: "string"
		}
	},
	"/buscaConta": {
		"POST": {
			term: "string"
		}
	}
};
