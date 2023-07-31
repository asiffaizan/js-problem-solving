//###############################(16/01/20203)#####################

let i = 1;
let factorial = 1
while (i<= 10) {
    factorial = factorial * i;
    i++;
}

console.log(factorial,"true");

function whileFactorial(n) {
    let ith  = 1;
    let factorialFunction = 1;
    while(ith<=n){
        factorialFunction = factorialFunction * ith;
        ith++;
    }
    return factorialFunction;
}

let factorial2 = whileFactorial(10);

console.log(factorial2,"yes");