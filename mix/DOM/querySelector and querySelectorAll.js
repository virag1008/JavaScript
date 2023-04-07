
// Query Selector
var xyz=document.querySelector("#check").innerHTML = "siteWEB";
console.log(xyz);


// it selects only first value and other rejects
var xyz=document.querySelector(".fa-solid");
console.log(xyz);

//to check how many times this class used
//in this, class name not started (.) with this . # etc
var xyz=document.getElementsByClassName("fa-solid");
console.log(xyz);


// Query Selector All
// it selects ALL value.
var xyz=document.querySelectorAll(".fa-solid");
console.log(xyz);

// it selects index 2 of class fa-solid.
var xyz=document.querySelectorAll(".fa-solid")[2];
console.log(xyz);

//inner html madhe kontach text nahi mhanun blank yeil.
var xyz=document.querySelectorAll(".fa-solid")[2].innerHTML;
console.log(xyz);

//other tag names.
var xyz=document.querySelectorAll("nav");
console.log(xyz);

var xyz=document.querySelectorAll("nav")[4].innerHTML;
console.log(xyz);

//advance querrySelector tagname madhe ajun tagname use karun
var xyz=document.querySelectorAll("nav .fa-solid");
console.log(xyz);



