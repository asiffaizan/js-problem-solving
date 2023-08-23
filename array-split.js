const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part  = numbers.slice(2, 6);

const removed = numbers.splice(2, 3, 77, 88, 99);// 2 index theke 3 ta element remove korbe and 77, 88, 99 add korbbe                                
// console.log(part);
console.log(removed);
console.log(numbers);

// const together = numbers.join(""); // element gula jog kore dekhabe
const together = numbers.join(" ami "); // ami lekha ti every element er sahe boshbr and element gula jog kore dekhabe 
console.log(together);