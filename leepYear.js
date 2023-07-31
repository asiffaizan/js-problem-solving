//###############################(16/01/20203)#####################

const year = 3997;
let remainder = year % 4; // vag shes
if (remainder == 0) {
    //console.log('your year is a Leap Year');
}else{
    //console.log(`the year isn't a leap year`);
}

//second way

function isLeapYear(year){
    let remainder = year % 4;
    let remainder2 = year % 100;
    let remainder3 = year % 400;
    if (remainder == 0 && remainder2 == 0 && remainder3 == 0) {
            let result = `year is a leap year`;
        return result
    }else{
        result = `year isn't a leap year`
        return result;
    }
}

const check = isLeapYear(1700);
console.log(check);