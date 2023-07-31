//=======================>>>19/01/23<<<===============================//

let a = 5;
let b = 6;
console.log('before swap: a =', a, ',b =', b);

let temp = a;
a = b;
b = temp;
console.log('after swap: a =', a, ',b =', b);

//or

let x = 5;
let y = 8;
console.log('before swap: a =', x, 'b =', y);

x = x + y;
y = x - y; //y=x+y-y=x => y=x
x = x - y; //x=x+y-y = x+y-x (because y=x) =y
console.log('after swap: a=', x, 'b=', y);

//or
let p = 3;
let q = 4;
console.log('before swap: p =', p, 'q =', q);

[p, q] = [q, p];
console.log('after swap: p =', p, 'q =', q);
