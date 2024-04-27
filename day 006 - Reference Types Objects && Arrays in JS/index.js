let obj = {
    name: "amit",
    "full name": "amit meher",
    "age": 22,
    greet : function (){
        console.log("hii jee kaise ho sare");
    }
};

console.log(obj);

obj.greet();

let obj2 = obj;

console.log(obj2);

for ( key in obj ){
    console.log(key," = ",obj[key]);
}

function sum ( arr){
    let sum = 0;
    for( let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(sum([1,2,3,4]));
console.log(sum([10,20,30,40,50,60,70,80]));