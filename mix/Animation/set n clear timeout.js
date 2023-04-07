

var a=setTimeout(funName,2000);

function funName(){
    document.getElementById("one").style.width="300px";
}
function stopFunName(){
    clearTimeout(a);
}