


var target=document.getElementById("fruits").children[1].cloneNode(true);
//var element=target.cloneNode(false);
  //var element=target.cloneNode(true);

// true value show innertxt with tag attribute -- false show only tags and antribute but not text.so take true always.
 console.log(target);

document.getElementById("veg").appendChild(target);