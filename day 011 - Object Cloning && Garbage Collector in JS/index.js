let obj = {
    age:12,
    wt:12,
    ht:12
};
console.log("obj =",obj);

let b = obj;
console.log("b =",b);

// spread operator
let spred = {...obj};
console.log("spred =",spred);

// assign method
let assign = Object.assign({},obj);
console.log("assign =",assign);

// iteration
let itr = {};
for( let key in obj){
    itr[key] = obj[key];
}
console.log("itr =",itr);


obj.color = "white";
obj.class = 10;


console.log("\nobj =",obj);
console.log("b =",b);

console.log("spred =",spred);
console.log("assign =",assign);
console.log("itr =",itr);