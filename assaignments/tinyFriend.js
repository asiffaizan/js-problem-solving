//=============>>>>>>>Assignments<<<<==========>>>>(24/01/23)<<<<=============//

//--------------ITS WORKS-------------------

/*
let allFriends = ['hasib', 'siam', 'sha alam', 'ansar', 'sakib', 'sayed', 'nayem', 'sd', 'ti ti', 'horin', 'tubelight', 'vot voti'];

function tinyFriend(friends){
    let friend = friends[0].length;
    for(let i=0; i<friends.length;i++){
        let characters = friends[i].length;
        // console.log(characters);
        if(characters<friend){
            friend = characters;
            // console.log(friend);
        }    
    }
    return friend;
}

let result = tinyFriend(allFriends);
// console.log(result);

//next
for(let j=0; j<allFriends.length; j++){
    let element = allFriends[j];
    //console.log(element);
    if(element.length == result){
        console.log('the result is',element);
    }
}

*/

//-----------ITS WORKS-------------------

let results= allFriends.reduce(
    function(a,b){
        if(a.length <= b.length){
            return a
        }else{
            return b
        }
    }
)
//console.log("smallest name is =",results);










//----------------------------------------------
// var min = Math.min(arr[0].length,arr[1].length,arr[2].length);



//-----------------ITS WORK--------------------

/*
console.log(
  allFriends.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
)
*/

//===================================================>>>>>>>>>>>

