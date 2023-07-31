//=======================>>>19/01/23<<<===============================//

let num = 2.4999; //float

let result = Math.floor(num);
// console.log(result);

let result2 = Math.ceil(num);
// console.log(result2);

let result3 = Math.round(num);
// console.log(result3);

let num4 = Math.random();
// console.log(num4);

//making dice

let randomNum = Math.random() * 6;
let roundNum = Math.round(randomNum);
let dice = Math.floor(roundNum) + 1;
//console.log(dice);

//10 bar dine dibo

for (i = 0; i <= 10; i++) {
  let randomNum = Math.random() * 6;
  let roundNum = Math.round(randomNum);
  let dice = Math.floor(roundNum) + 1;
  console.log(dice);
}

// for lottery in a class => students = 26

let students = Math.random() * 26;
let winner = Math.round(students);
//console.log(winner);
