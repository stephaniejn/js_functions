var data = require("./products.json")

var getItemsByAuthor = function(array, author){
	var newArray=[];
	for(var i=0; i <array.length; i++){
		if(array[i]["product"]["author"]["name"].split(" ")[0] === author){
			newArray.push(array[i]["product"]["title"]);
		}
	}
	console.log(newArray);
}
getItemsByAuthor((data["items"]),"eBay")


//To show the products:
// console.log(array[i]["product"]["author"]["name"]);