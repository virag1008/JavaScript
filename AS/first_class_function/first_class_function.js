

// function STATEMENT  //function DECLARATION (both are SAME)

  function funName() {
    console.log('a called')
  }
  funName();


// function EXPRESSION 

  var b = function () {
    console.log('b called')
  }
  b()

  // major diff between these function statement and expression is HOISTING..function expression does NOT allow HOISTING

// function ANNONYAMS

    // function () {
    //     console.log('b called')
    // }  
    // Function statements require a function name...directly use nahi karu shakat


// named function EXPRESSION 

  var c = function xyz () {
    console.log('c called')
  }
  c()
  // xyz()  // show error - bcoz xyz become local variable not global varible...aat madhe access karu shakto.
  var trying = function xyz () {
    console.log(xyz)
  }
  trying()


// First class function

   // the ability of function to use as values
   // and can be pass in an argument...and can be return from  the function
   // known as First class function
   // for such a functionality functions known as first class citizens


    var d = function (para1) {
       console.log(para1)
    }
    d( function() {
        
    });


    var dov = function (para1) {
        console.log(para1)
    }
    function ilu () {
         
    }
    dov(ilu );


    var dairyMilk = function (para1) {
       return function imissu () {
         
        }
    }
    
    console.log(dairyMilk());





// ARROW function 


