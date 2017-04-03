//JavaScript Document
var start = '{"favcolor":"Blue", "favSeason":"Fall"}';

var myObject = JSON.parse(start);
console.log(myObject);

var myString = JSON.stringify(myObject);
console.log(myString);
