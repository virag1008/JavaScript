
// this lines from create.js file
var element=document.createElement('h2');
console.log(element);  // o/p => <h2></h2>
var text=document.createTextNode('This is just text');
console.log(text);
var comment=document.createComment('This is comment');
console.log(comment);





// 1..APPEND CHILD - to attached this element and (text/comment) we use this
element.appendChild(text);
console.log(element);


//to attched it on id-test location-like shown
// [ document.getElementById("test").appendChild(element);] uncooment it for practice

//comment display in chrome element
document.getElementById("test").appendChild(comment);



//we can add this on which index no we want.
var xyz= document.getElementById("test");
xyz.insertBefore(element,xyz.childNodes[0]);
