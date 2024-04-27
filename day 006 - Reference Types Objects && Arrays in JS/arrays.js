let arr = [1,2,3,4];
console.log(arr, typeof(arr));

let brr = new Array(1,2,3,'end');
console.log(brr, typeof(brr));
console.log(brr[3]);

brr.push(true);
console.log(brr);

brr.pop();
console.log(brr);

brr.shift();
console.log(brr);

brr.unshift("start");
console.log(brr);

let sl = brr.slice(2,4);
console.log(sl);

console.log("brr =",brr);

brr.splice(1,2,'a','b');
console.log(brr);

arr = [1,2,3,4,5,6];
console.log("arr",arr);

let cubeArr = arr.map((val) => {
    return val**3;
});
console.log("cubeArr",cubeArr);

let evenArr = cubeArr.filter((val) => {
    return val%2 == 0;
});
console.log("evenArr",evenArr);

let sum = arr.reduce((accum,val) => {
    // console.log(val,accum);
    return val + accum;
},0);
console.log("sum",sum);

arr = [1,9,2,8,3,7,4,55,45,98];
arr.sort();
console.log(arr);

arr.sort((a,b) => {
    return a-b;
});
console.log(arr);

arr.sort((a,b) => {
    return b-a;
});
console.log(arr);

arr.forEach((val,ind) => {
    console.log(ind,val);
});

for( ind in arr){
    console.log("for in :",arr[ind]);
}

for( val of arr){
    console.log("for of :",val);
}