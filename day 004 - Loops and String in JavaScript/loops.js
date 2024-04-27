// for loop
for( let i=0; i<10; i++){
    if( i==2){
        continue;
    }
    if( i==5){
        break;
    }
    console.log("for loop: " + i);
}

// while loop
let i= 0;
while( i<10){
    if( i==2){
        i++;
        continue;
    }
    if( i==5){
        break;
    }
    console.log("while loop: " + i);
    i++;
}

// do while loop
i= 0;
do{
    if( i==2){
        i++;
        continue;
    }
    if( i==5){
        break;
    }
    console.log("do while loop: " + i);
    i++;
}while(i<10);