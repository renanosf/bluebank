let errorHandling = (function() {

	return {
		getStatus: (errors) => {
			let err = errors.filter((e) => {
				return e.type === "unique violation";
			});

			return err.length > 0 ? 409 : 422;
		},
		getText: (errors) => {
			let err = errors.filter((e) => {
				return e.type === "unique violation";
			});

			return err.length > 0 ? "Entidade já existe na base" : "Erro no banco de dados";
		}
	};

}());

module.exports = errorHandling;
