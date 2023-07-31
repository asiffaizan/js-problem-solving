 //###############################(18/01/20203)##################
 //====> recursive
 //যে function লেখার জন্য initial value declare করতে হয় তাই recursive function

 /* =====>> INITIAL VALUE
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
 */
 
 function fibonacci(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
 }

 let result = fibonacci(10);
 console.log(result);

 //test
 function test(num){
    if(0<num<=10){
        return 'love it'
    }else{
        return "don't love it"
    }
 }
 let results = test(33)
 console.log(results);

 //
function timeNow(time){
    if (time < 10) {
      return "Good morning";
    } else if (time < 20) {
      return "Good day";
    } else {
      return "Good evening";
    }
}
let today = timeNow(12)
console.log(today);
 