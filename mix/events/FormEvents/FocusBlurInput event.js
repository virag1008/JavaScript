
// 1..Focus event
  function funName(abc){
    abc.style.background="lightgreen";
  };


// 2..Blur event
  function fun_2 (abc){
     abc.style.background=""
  };


// 3..Input event
  function fun_3(abc){
    var x = abc.value;
    document.getElementById("z").innerHTML = x;

    // var vir=document.getElementById("z").innerHTML= document.getElementById("Name").value;
  }


  // 3..Input event
  function changeFunction(abc){
    var x = abc.value;
    document.getElementById("z").innerHTML = x;
  }


  // 4..SELECT event
  function selectFun(){
     console.log("you select this");
  }


  function submitFun(){
    var a = document.getElementById("Name").value;
    var b = document.getElementById("Class").value;

    alert(a+", you submitted form Successfully. for class -" + b );
  }

  function invalidFun(){
    alert("Required input - fill complete form")
  }


