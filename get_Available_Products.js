var data = require("./products.json")
var getAvailableProducts = function(array){
	var newArray=[];
	for(var i=0; i < array.length; i++){
		if(array[i]["product"]["inventories"][0]["availability"]==="inStock"){
			newArray.push(array[i])
		}
	}
	console.log(newArray);
}

getAvailableProducts((data["items"]));