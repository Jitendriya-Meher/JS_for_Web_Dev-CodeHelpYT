
class Human{
    // properties
    age = 13;
    #wt = 80;
    ht = 180;

    // constructor
    constructor(age=0,ht=0,wt=0){
        this.age = age;
        this.ht = ht;
        this.#wt = wt;
    }

    // behaviors
    walking(){
        console.log("I am walking");
    }

    running(){
        console.log("I am running");
    }

    get weight(){
        return this.#wt;
    }

    modifyWeight(val){
        this.#wt = val;
    }
}

let obj = new Human();
console.log(obj);

console.log(obj.age);
// console.log(obj.#wt);
obj.walking();
obj.modifyWeight(123);
console.log(obj.weight);


let cobj = new Human(1,2,3);
console.log(cobj);


function Name(fname="Amit",lname=fname.toUpperCase()){
    console.log(fname+" "+lname);
}
Name("Jitendriya","Meher");
Name("Jitendriya");
Name();
// Name(null);
Name(undefined);