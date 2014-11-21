//all functions

var data = require("./products.json")

var getsItems = function(){
return (data["items"]);
}

var getItemsByBrand = function(array, brand) {
	var newArray = [];
	for(var i=0; i<array.length; i++){
		if (array[i]["product"]["brand"] === brand) {
			newArray.push(array[i])
		}
	}
	return(newArray);
}

var getItemsByAuthor = function(array, author){
	var newArray=[];
	for(var i=0; i <array.length; i++){
		if(array[i]["product"]["author"]["name"].split(" ")[0] === author){
			newArray.push(array[i]);
		}
	}
	return(newArray);
}

var getAvailableProducts = function(array){
	var newArray=[];
	for(var i=0; i < array.length; i++){
		if(array[i]["product"]["inventories"][0]["availability"]==="inStock"){
			newArray.push(array[i])
		}
	}
	return(newArray);
}

console.log("Items by Nikon with author eBay:");
console.log(getItemsByAuthor(getItemsByBrand(data["items"], "Nikon"), "eBay"))

console.log("\nItems by Sony:");
console.log(getItemsByBrand((data["items"]), "Sony"));

console.log("\nItems by Sony that are available:");
console.log(getItemsByBrand(getAvailableProducts(data["items"]), "Sony"))


