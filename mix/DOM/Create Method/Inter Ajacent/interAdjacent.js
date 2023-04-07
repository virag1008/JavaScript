// //  1.. INTER ADJACENT ELEMENT

var newElement= document.createElement("h2");
var newText= document.createTextNode("this is just text");

newElement.appendChild(newText);
var position=document.getElementById("sample");
position.insertAdjacentElement("afterbegin", newElement);

//position.insertAdjacentElement("beforebegin", newElement);
//position.insertAdjacentElement("beforeend", newElement);
//position.insertAdjacentElement("afterend", newElement);


// //  2.. INTER ADJACENT HTML
// var target = document.getElementById("sample");
// var newElement = "<h2> This is just text </h2>"
// target.insertAdjacentHTML("afterbegin",newElement);


// //  3.. INTER ADJACENT TEXT
// var target = document.getElementById("sample");
// var newElement = "This is just text..."
// target.insertAdjacentText("afterbegin",newElement);

