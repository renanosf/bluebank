module.exports = function(res) {

	let arr = [];

	res.forEach((r) => {
		arr.push(r.dataValues);
	});

	return arr;
};
