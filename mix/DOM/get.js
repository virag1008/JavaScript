var a=document.getElementById("main").innerText;
console.log(a);

// var a=document.querySelector("#main").innerText;
// console.log(a);

// var a=document.getElementById("main").innerHTML;
// console.log(a);

var a=document.getElementById("main").getAttribute("style");
console.log(a); 

var a=document.getElementById("main").getAttribute("class");
console.log(a);

var b=document.getElementById("main").getAttributeNode("style");
console.log(b);

var a=document.getElementById("main").attributes;
console.log(a);

var a=document.getElementById("main").attributes[2];
console.log(a);


// ---------------------------------------------------
//  loop for of is used ..*****


var b=document.getElementsByClassName("one");
  for(value of b){
    console.log(value.innerText);
  }

var c=document.getElementsByClassName("nav2");
for(xyz of c){
    console.log(xyz.innerText);
  }

// ------------------------------------------------ 




