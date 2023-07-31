//###############################(17/01/20203)##################

/*
  for(let i=10;i>=1;i--){
    
}
 */

/* 
let i =10;
while (i>=1){
    i--;
}
*/

/*
0! = 1
1! = 1
2! = 1*2
3! = 1*2*3
4! = 1*2*3*4 = 3!*4
5! = 1*2*3*4*5 = 4!*5
6! = 1*2*3*4*5*6 = 5!*6 = (6-1)!*6
n! = (n-1)!*n
*/

function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

let result = factorial(10);
console.log(result);