//JavaScript Document

var theData1 = '{"first":"Patrick", "last":"James", "city":"Brooklyn"}';
var myObj = JSON.parse(theData1);
console.log(myObj);

document.getElementById('message').innerHTML = myObj.last;
