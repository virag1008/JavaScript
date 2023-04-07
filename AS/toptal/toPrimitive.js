
// var a={},
// b={};

// let c={ 
//   [Symbol.toPrimitive](hint) {
// if(hint=="number"){
// return 10;
// }
// }
// };

// a[b]=123;
// a["[object Object]"]=456;


// console.log(a[b]);
// console.log(+c);



// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// let obj = {
//   length: 5,
  
//   meth(fn) {
//     fn();
//     console.log(this.length);
//     console.log(fn);
//     console.log(arguments[0]);
//     arguments[0]();
//   }
// };

// obj.meth(fn, 1, 89);



// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);


var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);