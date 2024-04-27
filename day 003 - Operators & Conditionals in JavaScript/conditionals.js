// if-else 

let age = 212;

if( age <= 18){
    console.log("you can'T vote");
}
else if( age <= 60){
    console.log("you can't vote");
}
else{
    console.log("you are you old to vote");
    if( age >= 100){
        console.log("are you still alive?");
    }
    else{
        console.log("please vote for yourself");
    }
}

let a = 2;

switch(a){
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default:
        console.log('number out of range');
        break;
}