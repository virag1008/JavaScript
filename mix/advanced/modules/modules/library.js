 //  export  { name, fun2, latestModule }  
 // sarv export ekach veli karu shakto like this..

 export const name = "module es-6";


function fun1 (){
    console.log('hello everyone')
};  
fun1()
// HE FUNCTION KUTHECH USE NAHI KARAYCHE SO EXPORT NAHI KELE.yala faktt call kele aste tari te tithe show zale aste.



export function fun2 ( fname ){
    console.log('hello ' + fname)
};

export class ClassModule {
    constructor(){
        console.log("hello hii namaste ")
    }
}


//  ithun kelela call tithe sudhha show hoto jr export keyword lavlela asel tr.even tithe import nhi kela tari ... 
// but we mostly call from our main js file.

export class latestModule {
    constructor(){
        console.log("namaste india")
    }
}
var classimpo = new latestModule();






