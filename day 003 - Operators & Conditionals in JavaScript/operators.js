// arithmetic operator
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(5%3);
console.log(2**4);

// uniary operator
let a = 5;
console.log(a--);
console.log(--a);
console.log(a++);
console.log(++a);

// assignment operator
a=5;
a+=10;
console.log(a);
a=5;
a-=10;
console.log(a);
a=5;
a*=10;
console.log(a);
a=5;
a/=10;
console.log(a);
a=5;
a**=10;
console.log(a);
a=13;
a%=10;
console.log(a);

// comparision operators
console.log(3>4);
console.log(3>=4);
console.log(3<4);
console.log(3<=4);
console.log(3=="3");
console.log(3!="3");
console.log(3==="3");
console.log(3!=="3");

// ternary operator
let age = 22;
let flag = age >= 18 ? "you can vote" : "you cannot vote";
console.log(flag);

// logical operators
console.log(true && true);
console.log(true && false);
console.log(false || false);
console.log(true || false);
console.log(!false);

console.log(false && "amit");
console.groupEnd(true && "amit");
console.log(false && null);
console.log(true && null);

console.log(false || "amit");
console.groupEnd(true || "amit");
console.log(false || null);
console.log(true || null);

// falsey -> undefined, null, 0, false, NaN, ""
// truthy -> anything which is not falsey

// bitwise operators
console.log( 3 & 5);
console.log( 3 | 5);
console.log( 3 ^ 5);
console.log( ~3 );
console.log(10>>1);
console.log(10<<1);