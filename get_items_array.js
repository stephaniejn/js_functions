var data = require("./products.json")

var getsItems = function(){
return (data["items"]);
}

console.log(getsItems());