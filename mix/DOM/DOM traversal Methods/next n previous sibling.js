
// 1..nextElementSibling - next sibling select karto 

document.getElementById("part-corrected").nextElementSibling.style.background="red";

var a = document.getElementById("part-corrected").nextElementSibling;
console.log(a);

//last child cha next sibling- null/error.
var a = document.getElementById("part-E").nextElementSibling;
console.log(a);



// 2..previousElementSibling - previous sibling select karto 
var a = document.getElementById("part-corrected").previousElementSibling;
console.log(a);
document.getElementById("part-corrected").previousElementSibling.style.background="green";

//first child cha previous sibling- null/error.
// var a = document.getElementById("part-h1");previousElementSibling;
// console.log(a);


// 3..previousSibling - previous sibling select karto 
var a = document.getElementById("part-corrected").previousSibling;
console.log(a);


// 4..nextSibling - next sibling select karto 
var a = document.getElementById("part-corrected").nextSibling;
console.log(a);