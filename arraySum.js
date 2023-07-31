//=======================>>>22/01/23<<<===============================//

let numbers=[10,23,2,54,4,6,7,8,9,4,3];
let sum = 0;

for(let i=0; i<numbers.length; i++){
   let element = numbers [i]
   sum = sum + element;
}
console.log('Total of a numbers:',sum);


// by function

function getArraySum(number){
    let sum = 0;

    for(let i=0; i<number.length; i++){
    let element = number[i]
    sum = sum + element;
    }
    return sum;
}
let allNumbers=[10,23,2,54,4,6,7,8,9,4,3];
let result = getArraySum(allNumbers);
console.log('total of the number:', sum, '!');

let total = getArraySum([43,4,5,6,7,9,5,6,4,6,65,66]);
console.log('total:', total);