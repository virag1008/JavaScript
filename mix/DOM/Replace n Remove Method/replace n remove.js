
//  ((1))..replace child property

var tag=document.createElement("li");
var text=document.createTextNode("Wow new text");
tag.append(text);
// console.log(tag);

var target=document.getElementById("ul-id");
var pose=target.children[1];
//console.log(pose);
target.replaceChild(tag,pose);

//  ((2))..remove child property
var xyz=document.getElementById("ul-id");
var remove=xyz.children[0];
xyz.removeChild(remove);