//=======================>>>22/01/23<<<===============================// 
let speech = `I am    a good person and don't snore at night`;
console.log(speech.length);

let count = 0;
for(let i=0; i<speech.length;i++){
    let character = speech[i];
    // console.log(character);
    if (character == ' ' && speech[i-1]!=' ') {
        count++
    }
}
count++
console.log('word is',count);

