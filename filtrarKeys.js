function filtrarKeys (obj, filtros, action) {
	var arrayFiltered = [];
	for (var i = 0; i < Object.keys(obj).length; i++) {
		if (Object.keys(obj)[i] === filtros[i] && action === undefined) {
			arrayFiltered.push(Object.keys(obj)[i]);
		} else if (Object.keys(obj)[i] !== filtros[i] && action === true) {
			arrayFiltered.push(Object.keys(obj)[i]);
		};
	};
	return arrayFiltered;
}