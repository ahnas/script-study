

let arr = [1, 2, 3] ;

arr.unshift(9 ,4, 7) ;

arr.reverse() ; //reverse

arr.sort() ;




// Array.Map()
let num1 = [2,3,4,5,6,8,11];
let num2 = num1.map(multiply);
document.getElementById("demo").innerHTML = num1;
function multiply(value) {
    return value * 3;
}
document.getElementById("demo2").innerHTML = num2;


// Array-FilteR
let num3 = num1.filter(comp);
function comp(value) {
    return value > 99;
}
document.getElementById("demo3").innerHTML = num3;


// Array-Reduce
let num4 = num1.reduce(comp) ;
function comp(total,value) {
    return total + value ;
}
document.getElementById("demo4").innerHTML = num4;


