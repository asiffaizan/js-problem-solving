//=======================>>>22/01/23<<<===============================//

let names = [ 3,2,5,6,4,6,4,64,5,5,5,4,5,4,6,5];
let uniqueName = [];
for(let i=0; i<names.length; i++){
    let element = names[i];
    let index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);