//=======================>>>19/01/23<<<===============================//

let business = 45;
let minister = 50;
let secretary = 51;

// by condition
if (business > minister) {
  if (business > secretary) {
    console.log('Business is bigger');
  } else {
    console.log('secretary is bigger ');
  }
} else {
  if (minister > secretary) {
    console.log('Minister is bigger');
  } else {
    console.log('Secretary is bigger');
  }
}

//or but it give nly number
let maxValue = Math.max(business, minister, secretary);
console.log(maxValue);

let minValue = Math.min(business, minister, secretary);
console.log(minValue);
