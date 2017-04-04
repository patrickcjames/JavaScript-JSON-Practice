//JavaScript Document

// var theData1 = '{"first":"Patrick", "last":"James", "city":"Brooklyn"}';
// var myObj = JSON.parse(theData1);
// console.log(myObj);
//
// document.getElementById('message').innerHTML = myObj.city;

// var theData2 =
//     '{"James":{"age":"29","degree":{"AAS":"VMI", "BA":"UVA"}},"Joseph":{"age":"49","degree":"Masters"}}';
//
// var myObj = JSON.parse(theData2);
// console.log(myObj);
//
// document.getElementById('message').innerHTML = myObj.James.degree.BA;

var xhr = new XMLHttpRequest();
xhr.open('Get', 'data.json', true);

//activates open
xhr.send();

//Track what is going on
xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
  console.log(xhr.statusText);
} //end function

xhr.onload = function() {
  if (xhr.status === 200) {
  var myStuff = JSON.parse(xhr.responseText);
  console.log(myStuff);
  } //end if
} //end onload function
