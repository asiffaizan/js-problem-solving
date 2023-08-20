function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());//from clock1 count is 6

//what is closure?
//Ans: Closure is when a function is able to remember and access its lexical(আভিধানিক) scope even when that function is executing outside its lexical scope.
// fore more details: https://thatjsdude.com/jsConcepts/concepts/scope.html