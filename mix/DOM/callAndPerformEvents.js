//BY DIRECT EVENT NAME

// click kelyavar color change hoto
document.getElementById("main").onclick = funName;

function funName (){
    document.getElementById("main").style.backgroundColor = "lawngreen"
};


// mouse enter kelyavar color change hoto => but last event madhe function removal procress madhe delete zale.to check comment out last part..

var xyz=document.getElementById("main").onmouseleave = funName1;

function funName1 (){
    document.getElementById("main").style.backgroundColor = "skyblue";
}; 

//BY - ADD EVENT LISTNER METHOD

//double click kelyavar shadow yeil.
// this = document.getElementById("main")

document.querySelector( "#main" ).addEventListener("dblclick",funName2);
function funName2(){
    this.style.textShadow = "15px 10px 10px white";
};


//BY - REMOVE EVENT LISTNER METHOD

//varcha code samajnyasathi copy karun comment kela



// var xyz=document.getElementById("main").onmouseenter = funName1;
// function funName1 (){
//     document.getElementById("main").style.backgroundColor = "skyblue";
// }; 


// document.getElementById("main").addEventListener("click",function(){
//     this.removeEventListener("mouseleave",funName1)
// });






