//onkeypress	occurs when user presses a key for input.
//onkeydown     occurs when user presses any key

/*
- Game starts by pressing any key function Start()
- I have an array called name and it consists of 25 HP characters var name []
- I have a win counter set at 0 (var win) / a lose counter set at 0 (var lose)/ a number of try counter set at 10 (var count)
- When game starts a random name is picked from my array of names function newGame () and then function display () will show the name as _ _ _ _ on screen
- When user types a letter - function scan() looks for the letter within the selected name.
- if return true - function correct() will fill at the correct position within _ _ _ _ 
- else reduce var try by 1 
- when var pickName is fully displayed then function win() moves up win counter by 1 then function newGame() runs again try counter is reset
- when var try = 0 then function lose() runs to move up the lose counter by 1 and then function newGame() runs again try counter is reset
*/

/* Psuedo code
user press key {
    if certain letter then end game
    else {start game by picking a random word}
}

once a random word has been picked {
    if guess is right show letter on answer
    else {show in guessed letter}
    else if {all letters guessed mark win}
    else if {number of tries = 0 mark lose}
}

and somehow the wordArray has to show up as _ _ _ _ _ _ on the web page

*/


//Defining all the variables in game. will need to move them within scope to avoid pollution as much as possible...

var spells = []; // the array of possible words
var word; // word selected for the round
var guess; // letter inputed by user
var guesses = []; // stored guesses
var tries; // # tries left
var win; // # of wins
var loss; // # of losses


document.onkeypress = function(){
    // here should a gameStart() function that executes the game start
    // if number 1 pressed - end game 
    // else start game
}

function gameStart(){
    //something in here to start game
}

function gameEnd(){
    //something in here to signal game end
}

var spells = [
    "accio",
    "aparecium",
    "riddikulus",
    "expelliarmus",
    "colloportus",
    "duro",
    "geminio",
    "engorgio",
    "incendio",
    "immobulus",
    "fumos",
    "impedimenta",
    "imperio",
    "lumos",
    "obliviate",
    "reparo",
    "nox",
    "protego",
    "reducio",
    "reducto",
    "repello",
    "scourgify",
    "spongify",
    "stupefy",
    "alohomora",
    "evanesco",
];


var spell = spells[Math.floor(Math.random()*nameList.length)]; // this randomly selects form the array
var spell = [];

for (var i=0; i < spells.length; i++) {
    spell[i] = " _ ";
}

console.log(randomName);
console.log(answerName); // display properly


