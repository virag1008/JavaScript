// 1. style

//console border
var abc = document.querySelector("#main").style.border;
console.log(abc);

//console border property assign
var abc = document.querySelector("#main").style.border = "3px solid green";
console.log(abc);

var abc = document.querySelector("#main").style.backgroundColor = "skyblue";
console.log(abc);

// 2. className
// ID sobat class name add karnyasathi
var abc = document.querySelector("#check").className = "class1 class2";
console.log(abc);

// 3. classList
var abc = document.querySelector("#check").classList;
console.log(abc);

//classlist method - A.- ADD - extra class add karta yete.
var abcd = document.querySelector("#check").classList.add("virag","jain");
console.log(abcd);

//classlist method - A.- REMOVE - unneccesary class remove karta yete.
var abcd = document.querySelector("#check").classList.remove("virag");
console.log(abcd);