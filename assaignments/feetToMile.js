//=============>>>>>>>Assignments<<<<==========>>>>(23/01/23)<<<<=============//

function feetToMile(feet){
    if(feet<0){
       let alert= `length can't be negative`
       return alert
    }else{
        let mile = feet/5280;
        return mile;
    }
}
let result = feetToMile(9055);
console.log(result);