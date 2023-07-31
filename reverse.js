//=======================>>>23/01/23<<<===============================//
function reverseString(str){
    let reverse = '';
    for(let i=0; i<str.length; i++){
        let character = str[i];
        reverse = character + reverse;
    }
    return reverse;
}

let statement = 'Hello Alien brothers.';
let forAlien = reverseString(statement);
console.log(forAlien);

let asked = reverseString('are all of you ok?');
console.log(asked);