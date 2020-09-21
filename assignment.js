/* feet to mile convert */
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var totalMile = feetToMile(5443);
console.log(totalMile);


/*Wood Calculator */
function woodCalculator(chair, table, khat) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var khatWood = khat * 5;
    var result = chairWood + tableWood + khatWood;
    return result;
}

var totalWood = woodCalculator([5] , [4] , [3]);
console.log(totalWood);

/* Bricks Calculation */
function brickCalculator(floor) {
   if (floor <= 10) {
       var totalBrick = floor * 15 * 1000;
   }
   else if (floor <=20){
       var totalBrick = (floor - 10) * 12 * 1000;
       var totalBrick = totalBrick + 10 * 15 * 1000;
   }
   else if(floor > 20){
       var totalBrick = (floor - 20) * 10 * 1000;
       var totalBrick = totalBrick + (10 * 15 * 1000) + (10 * 12 * 1000);
   }
   return totalBrick;
}

var totalBrickNeed = brickCalculator(45);
console.log(totalBrickNeed);

// Find largest name of friends array 
var friends = ["Nasim", "Rahaman", "Marium", "Sanjida Rahaman", "Shakh Ibn Batuta"];
var max = friends[0];
function tinyFriend() {
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}


var largestFriendName = tinyFriend()
console.log("Big Man/Woman is:", largestFriendName);


