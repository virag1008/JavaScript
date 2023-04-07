

//  1..CHILDREN ELEMENT - it shows Child of given parent element

//  child of outer div is inner div & h1.
var a = document.getElementById("outer").children;
console.log(a);

//  child of inner div is inner div & h1.
var a = document.getElementById("inner").children;
console.log(a);


//  child of inner div is inner div & h1. and to select one of these is by [index no] ,inner content and apply styling
var a = document.getElementById("inner").children[2].innerHTML;
console.log(a);
document.getElementById("inner").children[2].style.background = "lightblue";





//  2..CHILDNODES - it shows Child of given parent element with tagname and innertext

//  child of outer div is inner div & h1.
var a = document.getElementById("outer").childNodes;
console.log(a);