var data = require("./products.json")

var getItemsByBrand = function(array, brand) {
	var newArray = [];
	for(var i=0; i<array.length; i++){
		if (array[i]["product"]["brand"] === brand) {
			newArray.push(array[i])
		}
	}
	console.log(newArray);
	return(newArray);
}

getItemsByBrand((data["items"]), "Nikon")
