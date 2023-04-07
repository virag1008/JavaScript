console.log("1.innerText 2.innerHTML 3.setAttribute 4.Attribute 5.removeAttribute");

var a=document.getElementById("check").innerText = "Siteweb"
console.log(a);
//text change hote...

var a=document.getElementById("check").innerHTML = "<i>Siteweb modified</i>"
console.log(a);
// text sobat property pn apply karu shakto.

var a=document.getElementById("main").setAttribute("style","border:10px dotted green");
console.log(a);
//attribute set karte

var a=document.getElementById("main").attributes[1].value = "Virag";
console.log(a);

//attribute chi value set karte. but setAttribute method easy aahe

var a=document.getElementById("main").removeAttribute("style");
console.log(a);

//border remove zali