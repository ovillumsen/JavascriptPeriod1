let names = ["Oliver", "Tim aka Dårlig Warlock", "Fatfinger træform", "bo", "ben"];

let names2 = names.filter(function(name) {
return name.length >= 3;
});
console.log(names2);

let rows = names.map(function(name) {
    return "<td>"+name +"</td>";
});
let rowsStr = rows.join(" ");
let table = `<table><tbody> $(rowsStr)  </tbody></table>`
console.log(table);