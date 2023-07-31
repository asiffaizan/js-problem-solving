//###############################(16/01/20203)#####################

// by using loop
let factorial =  1; //initial value 1 for multiplication and 0 for addition
for(let i = 1; i<= 50; i++){
    factorial = factorial * i;
    // console.log(i,factorial); ekhane consol korle bar bar value ashbe......
}
//console.log(factorial);



//by using function

function factorials(n) {
    let factorial = 1;
    for(let i=1;i<=n;i++){
        factorial = factorial * i;
    }
    return factorial;
}
let result = factorials(10);
console.log(result);