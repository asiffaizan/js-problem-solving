//###############################(17/01/20203)##################

// 0,1,1,2,3,5,8,13,21,........(a,b,c..=> a+b=c sequence will be maintains)
/*
fibo[2] = fibo[2-1] + fibo[2-2];
fibo[3] = fibo[3-1] + fibo[3-2];
fibo[4] = fibo[4-1] + fibo[4-2];
fibo[5] = fibo[5-1] + fibo[5-2];
fibo[6] = fibo[6-1] + fibo[6-2];
fibo[n] = fibo[n-1] + fibo[n-2];
fibo[i] = fibo[i-1] + fibo[i-2];
*/
//iterative way
let fibo = [0,1]; //initial condition
for(let i=2; i<=10;i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    //console.log(fibo[i],fibo[i-1],fibo[i-2]);
}
console.log(fibo,"series1");

//by function

function fibonacci(n) {
    let fib = [0,1];//initial condition
    for(let i=2; i<=n; i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib;
}
let series = fibonacci(10)
console.log(series,"series2");