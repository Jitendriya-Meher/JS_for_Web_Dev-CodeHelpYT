// compile time error
// console.log("hii";

// run time error
// console.log(x);

// error handling
try{
    console.log(x);
}
catch(e){
    console.log("error: " , e.message);
}
finally{
    console.log("Inside finally block");
}

// custom error
try{
    console.log(x);
}
catch(err){
    throw new Error("Bhai pahele declare karo");
}