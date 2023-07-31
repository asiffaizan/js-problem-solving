//=============>>>>>>>Assignments<<<<==========>>>>(23/01/23)<<<<=============//

function brickCalculator(building){
    if(building<0){
        return `building storey can't be negative`
    }else if(building<=10){
        return (building*15*1000)
    }else if(building<=20){
        let upTo10 = building - 10;
        let under10 = building - upTo10;
        return (under10*15*1000 + upTo10*12*1000);
    }else{
        let upto20 = building -20;
        let under20 = building - upto20;
        return(
            ((under20/2)*15*+(under20/2)*12+upto20*10)*1000
        )
    }
}
let bricks = brickCalculator(23);
console.log(bricks);