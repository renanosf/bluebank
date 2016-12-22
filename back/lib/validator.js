// Metodo para retornar o objeto de erro
let retornaErroObjeto = function(status) {
	return {
		mensagem: "Erro ao validar campos",
		status: status,
		err: -1
	};
};

// Modulo Validador de JSONs enviados para o webservice

let validate = function(required, body, rota, method) {

	if (typeof required[rota] !== "undefined" && typeof required[rota][method] !== "undefined") {

		for (let prop in required[rota][method]) {

			if (typeof body[prop] === "undefined") {
				return retornaErroObjeto(400);
			}

			switch (required[rota][method][prop]) {
				case "number|string":
					if (isNaN(body[prop]) && typeof body[prop] !== "string") {
						return retornaErroObjeto(422);
					}
					break;
				case "number":
					if (isNaN(body[prop])) {
						return retornaErroObjeto(422);
					}
					break;
				default:
					break;
			}

		}
		return true;

	} else {
		return true;
	}
};

module.exports = function(required) {
	return function validator(req, res, next) {
		let v = validate(required, req.body, req.path, req.method);
		if (v === true) {
			// eslint-disable-next-line
			next();
		} else {
			res.status(v.status).json({err: v.err, mensagem: v.mensagem});
		}
	};
};
