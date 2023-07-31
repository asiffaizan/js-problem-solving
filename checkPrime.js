//====================>>>>>>18/1/23<<<<======//

let n = 70;
for (i = 2; i < n; i++) {
  //console.log(i, n % i);
  if (n % i == 0) {
    //console.log('Not a prime number');
    break;
  }
}
//console.log('number is a prime number');

//[note: in this case have a problem. if number is prime then its show both console log]

//way two

function isPrime(m) {
  for (i = 2; i < m; i++) {
    if (m % i == 0) {
      return 'Note a a prime number';
    }
  }
  return 'Number is prime number';
}
// 25 er vagsheh 0 tai eti if condition a jabe and return korbe
//but 23 er khetre for loop  a dhukbe and condion if check korbe. as condition isn't satisfied tai ta kichu return na kore for loop theke ber hobe and return korbe Number is prime number

let result = isPrime(23);
console.log(result);
