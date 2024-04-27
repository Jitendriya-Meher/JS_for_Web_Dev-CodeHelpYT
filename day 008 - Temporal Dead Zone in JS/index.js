// global scope
let age = 15;
console.log(age);

{
    console.log(age);
    var a = 10;
}
console.log("a =" , a);

function say(){
    console.log(age);
}
say();

// function scope
function sayHello(){
    let name = "Amit";
    console.log("name: " + name);
}

sayHello();