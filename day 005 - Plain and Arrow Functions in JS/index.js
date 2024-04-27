
function add( a, b){
    console.log(a,"+",b,"=",a+b);
}

add(2,3);
add(3,4);

function getName( fname, lname="Meher"){
    let name = fname + " " + lname;
    return name;
}

console.log(getName("Amit","Meher"));
console.log(getName("Jitendriya"));

const sub = function ( a ,b ){
    console.log(a,"-",b,"=",a-b);
}

sub(1,2);
sub(10,4);

const mul = ( a, b) => {
    console.log(a,"X",b,"=",a*b);
}

mul(2,3);
mul(3,4);