//all functions

var data = require("./products.json")

var getsItems = function(){
return (data["items"]);
}

var getItemsByBrand = function(array, brand) {
	var newArray = [];
	for(var i=0; i<array.length; i++){
		if (array[i]["product"]["brand"] === brand) {
			newArray.push(array[i]["product"]["title"])
		}
	}
	console.log(newArray);
}

var getItemsByAuthor = function(array, author){
	var newArray=[];
	for(var i=0; i <array.length; i++){
		if(array[i]["product"]["author"]["name"].split(" ")[0] === author){
			console.log(array[i]["product"]["author"]["name"]);
			newArray.push(array[i]["product"]["title"]);
		}
	}
	console.log(newArray);
}

var data = require("./products.json")
var getAvailableProducts = function(array){
	var newArray=[];
	for(var i=0; i < array.length; i++){
		if(array[i]["product"]["inventories"][0]["availability"]==="inStock"){
			newArray.push(array[i]["product"]["title"])
		}
	}
	console.log(newArray);
}

console.log("Items by Nikon with author eBay");
console.log(getItemsByBrand(getItemsByAuthor((data["items"]),"eBay")), "Nikon");

console.log("\nItems by Sony:");
getItemsByBrand((data["items"]), "Sony");

console.log("\nItems by Sony that are available:");
console.log(getItemsByBrand(getAvailableProducts((data["items"]), "Sony")))


