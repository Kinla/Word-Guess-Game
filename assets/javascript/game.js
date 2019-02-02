// problem? guess the word
"use strict";

// create a list of definded words that can be guesssed
    var spell = [
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

const maxTries = 9; // max # of tries

// create entire game object
var game = {
    spellList: spell, // property holding list
    guessedLetters: [], // holds unique letters guessed
    randomSpell: "", // the selected spell
    correctGuess: [], // chars guessed correctly
    win: 0, // total wins
    winSound: new Audio("../music/hedwigs.mp3"),
    loss: 0, // total losses
    remainingTries: 0, // remaining guesses set to 0
    hasFinished: true, // if won or loss

    // reset game function that resets all variables + starts game
    resetGame: function (){
        this.remainingTries = maxTries;
        this.hasFinished = false;
        this.guessedLetters = [];
        this.correctGuess = [];

        this.randomSpell = this.spellList[Math.floor(Math.random()*this.spellList.length)]; // this randomly selects a spell

        // build the spell for guessing
        for (var i = 0; i < this.randomSpell.length; i++){
            this.correctGuess.push("_");
        }
        this.updateDisplay();
    },

    // updae Display function. updates the HTML display areas (win, loss, guesses, correct guesses)
    updateDisplay: function(){
        var progress = "";
        for (var i = 0; i < this.randomSpell.length; i++){
            progress += (this.correctGuess[i] + " ");
        }

        document.querySelector("#showQuestion").innerHTML = progress;
        document.querySelector("#showTries").innerHTML = this.remainingTries;
        document.querySelector("#showGuess").innerHTML = this.guessedLetters.join(", ");
        document.querySelector("#showWin").innerText = this.win;
        document.querySelector("#showLoss").innerText = this.loss;
    },

    // user makes guess
    userGuess: function (letter) {
        if (this.remainingTries > 0){
            if (this.guessedLetters.indexOf(letter) === -1) {
                this.guessedLetters.push(letter);
                this.matchGuess(letter);
            }
        }
        this.checkSpell();
        this.updateDisplay();
    },

    //Scan user's guess through function matchGuess
    matchGuess: function(letter){
        var position = [];
        for (var i = 0; i < this.randomSpell.length; i++) {
            if (this.randomSpell[i] === letter){
                position.push(i);
            }
            
        }

        if (position.length <=0){
            this.remainingTries--;            
        } else {
            for (var i = 0; i < position.length; i++){
                this.correctGuess[position[i]] = letter;
            }
        }
    },

    // check if user guess all letters in word
    checkSpell: function (){
        //if win
        if (this.correctGuess.indexOf("_") === -1){
            this.win++
            this.hasFinished = true;
            return;
        }
        //if lose
        if (this.remainingTries == 0){
            this.loss++
            this.hasFinished = true;
            return
        }
    },
};

// Listen to user key input
window.addEventListener("keyup", function(event){
    if (game.hasFinished) {
        game.resetGame();
        game.hasFinished = false;
        document.querySelector("#hide").innerText = "";

    } else {
        if (event.keyCode >= 65 && event.keyCode <=90){
            game.userGuess(event.key.toLowerCase()); 
           
        }
    }
});

console.log(game.randomSpell);
