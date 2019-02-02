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

var randomSpell: "";
var guessedLetters: [];
var correctGuess: [];
var win = 0;
var loss = 0;
var tries = 9;
var Finished = true;

window.onload = resetGame();

// reset game
var resetGame = function (){
    randomSpell = spell[Math.floor(Math.random()*spell.length)]; // this randomly selects a spell
    for (var i = 0; i < this.randomSpell.length; i++){
        this.correctGuess.push("_");
    }
    guessedLetters = [];
    correctGuess: [];

};

var updateDisplay = function (){
    var progress = "";
    for (var i = 0; i < this.randomSpell.length; i++){
        progress += (this.correctGuess[i] + " ");
    }
    document.querySelector("#showQuestion").innerHTML = progress;
    document.querySelector("#showTries").innerHTML = remainingTries;
    document.querySelector("#showGuess").innerHTML = guessedLetters;
    document.querySelector("#showWin").innerText = win;
    document.querySelector("#showLoss").innerText = loss;

};

// create entire game object
var game = {
    spellList: spell, // property holding list
    guessedLetters: [], // holds unique letters guessed
    randomSpell: "", // the selected spell
    correctGuess: [], // chars guessed correctly
    win: 0, // total wins
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
        document.querySelector("#showGuess").innerHTML = this.guessedLetters;
        document.querySelector("#showWin").innerText = this.win;
        document.querySelector("#showLoss").innerText = this.loss;
    },

    // track user's guess
    userGuess: function (letter) {
        if (this.remainingTries > 0){
            if (this.guessedLetter.indexOf(letter) === -1) {
                this.guessedLetter.push(letter.toUpperCase());
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
            this.remaingingGuesses--;            
        } else {
            for (var i = 0; i < position.length; i++){
                this.correctGuess[position[i]] = letter;
            }
        }
    },

    // check if user guess all letters in word
    checkSpell: function (){
        //if win
        if (this.randomSpell.indexOf("_") === -1){
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
    } else {
        if (event.keyCode >= 65 && event.keyCode <=90){
            game.userGuess(event.key.toLowerCase()); // this is unable to pass to game???
        }
    }
});

