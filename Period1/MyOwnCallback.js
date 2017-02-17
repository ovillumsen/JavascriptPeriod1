let names = ["Oliver", "Tim aka Dårlig Warlock", "Fatfinger træform", "bo", "ben"];

function filter(arr,callback) {
let arrayToReturn = [];
arr.forEach(function(name) {
let shouldInclude = callback(name);
if(shouldInclude) {
    arrayToReturn.push(name);
}
});
return arrayToReturn;
}

let names2 = filter(names,function(name) {
    return name.length >=3;
});