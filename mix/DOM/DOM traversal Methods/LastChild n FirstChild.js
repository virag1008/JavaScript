
//  1..FIRST ELEMENT CHILD 

//select first child of inner id is h1 
var a= document.getElementById("inner").firstElementChild;
console.log(a);

// style h1 using first element child 
document.getElementById("inner").firstElementChild.style.background="red";


//  2..LAST ELEMENT CHILD 


//select Last child of inner id is div-E 
var a= document.getElementById("inner").lastElementChild;
console.log(a);

// style Div-E using last element child 
document.getElementById("inner").lastElementChild.style.background="red";



//  3..FIRST CHILD 

var a= document.getElementById("inner").firstChild;
console.log(a);

var a= document.getElementById("part").firstChild;
console.log(a);


//  4..LAST CHILD 

var a= document.getElementById("inner").lastChild;
console.log(a);

var a= document.getElementById("part").lastChild;
console.log(a);
