// problem? guess the word

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

// picke a random word from the list
    var randomSpell = spell[Math.floor(Math.random()*spell.length)]; // this randomly selects form the array
// store that random word in a variable in the form of a question
    var question = [];
    for (var i = 0; i < randomSpell.length; i++){
        question.push("_");
    }

    console.log(randomSpell);
    console.log(question);

// define a variable that stores total # of tries
    var tries = 10;
    document.getElementById("showTries").innerText = tries;


// have user enter a key
    // Include "Press any key to get started" within HTML.
    // see if i can get program to flash this line until user enters a key
    // use if else statment to also assign "1" as end game key


    
// listen to the key event for guesses
    var guesses = [];
    window.addEventListener("keyup",function(e){
        // stores only alphabets and no recurring characters
        if (event.keyCode <= 90 && event.keyCode >= 65 && guesses.indexOf(event.key) == -1){
            guesses.push(event.key.toLowerCase());
            document.getElementById("showGuess").innerHTML = guesses;
        };
    })
        // check if key pressed matches at each position of the word

// display guesses

// reveal positions matching key pressed
// else     decrease total number of tries by one


// if total number of tries = 0
// then score = score -1
// reset guesses to be total number of guesses
// choose another random word
// repeat game

// if word is guessed by user
// then score = sore + 1
// reset gueses to be total number of guesses
// choose another random word
// repeat game