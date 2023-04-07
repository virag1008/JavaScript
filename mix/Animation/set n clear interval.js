

// 1..set Interval - for continue animation.
// 1..Clear Interval - for continue animation.

var xyz = setInterval (animation , 500);
var a=0;
function animation(){
    //console.log("hello");
    a = a+10;

    if( a == 200){
        clearInterval(xyz);
    } 
    else {
        document.getElementById("one").style.marginLeft = a +"px";
        // in this way we can animate -width -height padding etc
    }
}
