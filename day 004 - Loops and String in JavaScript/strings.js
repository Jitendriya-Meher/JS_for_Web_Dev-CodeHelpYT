let name = "amit";
console.log(name, typeof(name));

name = `amit
meher`;
console.log(name);

let fname = new String("amit");
console.log(fname, typeof(fname));

let op1 = "English ";
let op2 = "Hindi";

let ans1 = op1 + op2;
console.log(ans1);

let ans2 = `${op1}and ${op2}`;
console.log(ans2);
console.log(ans2.length);

let uc = ans2.toUpperCase();
console.log(uc);

let lc = ans2.toLowerCase();
console.log(lc);

let ss = ans2.substring(2,5);
console.log(ss);

let strArr = ans2.split(' ');
console.log(strArr);

let str = strArr.join(" , ");
console.log(str);