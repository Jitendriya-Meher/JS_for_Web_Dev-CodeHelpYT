// console.log(age);
// console.log(pi);
// fun("jiten");

let age = 12;
const pi = 3.14;

let fun = (nm) => {
    console.log("hii",nm);
} 

console.log(age);
console.log(pi);

fun("amit");


// let obj2 = new Human();

class Human{

}

let obj1 = new Human();

let arr = [
    function(a,b){
        console.log(a+b);
    },
    function(a,b){
        console.log(a*b);
    }
]

arr[0](10,20);
arr[1](10,20);