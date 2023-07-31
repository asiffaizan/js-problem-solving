//=======================>>>22/01/23<<<===============================//

let marks = [45, 87, 63, 98, 56, 36, 30, 99];
let max = marks[0];
for(let i=0; i<marks.length; i++){
    let element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log('highest value is:',max);