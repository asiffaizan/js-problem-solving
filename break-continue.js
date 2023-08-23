const numbers = [-1,-2,-3,-4,-5,-6,-7,-8,-9,1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<numbers.length; i++) {
    if(numbers[i]>5){
        break; // end of the loop
    }
    // console.log(numbers[i]);
}

for(let i=0; i<numbers.length; i++) {
    if (numbers[i]<0){
        continue; // skip kore dekhabe
    }
    console.log(numbers[i]);
}