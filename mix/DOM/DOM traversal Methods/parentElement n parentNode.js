

//  1..PARENT ELEMENT - it shows parent of given element

//  parent of inner div is outer div
var a = document.getElementById("inner").parentElement;
console.log(a);

//  parent of  outer div is body
var a = document.getElementById("outer").parentElement;
console.log(a);

//  parent of body is html
var a = document.body.parentElement;
console.log(a);

//child through parent call karun tyala properties
document.getElementById("inner").parentElement.style.background="lightgreen";

//  parent of part is div C
document.getElementById("part").parentNode.style.background="green";
var asd=document.getElementById("part").parentNode;
console.log(asd);






//  2..PARENT NODE - it is same like parent element just diffrence is if any element does not have parent then it will anyvalue but in parent element it gives null...


//  parent of  outer div is body
var a = document.getElementById("htmlId").parentElement;
console.log(a);

//  parent of  outer div is body
var a = document.getElementById("htmlId").parentNode;
console.log(a);