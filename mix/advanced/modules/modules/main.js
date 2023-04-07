

import { name, fun2 as moreFun, ClassModule, latestModule} from "./library.js";

// fun2 che nav change karun aata moreFun kele... so if we use fun2 after this then it will show error

// KAHI CLASS ETHE WITHOUT IMPORT RUN HOTAT JR TITHE EXPORT & TITHECH CALL KELELA ASNAR TR eg - ClassModule o/p sarvat var show hoto.

console.log(name);

// import { fun2 } from "./library.js";  
// DOUBLE DECLARE NAHI KARU SHAKAT.

// fun2("virag");
 moreFun("virag")

// import { classimpo } from "./library.js"; 
// var classimpo = new latestModule();

// import { name, fun2, latestModule} from "./library.js";
// varcha import remove karun khali pn import karta yete means hoisting is allow. 
