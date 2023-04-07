function sum(para1, para2) {
    if (para2 == undefined) {
        return function (para3) {
            console.log(para1 + para3);
        }
    } else {
        console.log(para1 + para2)
    }
}
sum(2, 3);
sum(2)(3)


// ANOTHER METHOD

function sum2(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function (y) { return x + y; };
    }
}
;

console.log(sum2(2, 3))
console.log(sum2(2)(3))
