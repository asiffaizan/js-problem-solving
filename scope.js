let bonus = 20;

function sum(first, second) {
    let result =  first + second + bonus;
    // console.log(result); // [result is now defined]
    // console.log(bonus); // [can access from hares too]
    if(result>9){
        const mode = "Charming";
        console.log(mode);
    }
    // console.log(mode); //[mode is not defined because its not accessible outside of the function]
    return result;
}
const output = sum(3, 7);
// console.log(output);

// console.log(result); // [result is not defined because its not accessible outside of the function]
// console.log(bonus); //[global scope]

/*Note:
if declared any thing with let or const then I can access that under the area and can't  call before declared 

but if I declared anything with var than I can access it from anywhere.Also call that before declared
*/