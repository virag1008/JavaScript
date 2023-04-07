// CLASSLIST METHODS


// 1..ADD 2..REMOVE
// if u see brower / inspect / element / divIDClass only one class is shown but after clickung in mentioned id part class name is added 

document.getElementById("main").addEventListener("click",function(){
    this.classList.add("xyz","abcd");
});

//CLASSLIST MADHLE ITEMS CHECK KARNYA SATHI
var asd = document.getElementById("main").classList;
console.log(asd);

// 3..LENGTH-length find hote
var asd = document.getElementById("main").classList.length;
console.log(asd);

// 3..Toggle - by clicking add and remove process continues 

document.getElementById("main").addEventListener("click",function(){this.classList.toggle("ilu")});

//4..ITEM  (INDEX) - onthat index nowhich class is apply is shown

document.getElementById("main").addEventListener("click",virag);
function virag(){
    var av=this.classList.item(1);
    console.log(av);
};

//5..CONTAIN  (CLASS) - onthat index nowhich class is apply is shown.

document.getElementById("main").addEventListener("click",virago);
function virago(){
    var avs=this.classList.contains("xyz");
    console.log(avs);
};



