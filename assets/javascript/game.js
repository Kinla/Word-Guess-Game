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
    console.log(randomSpell);
// help // store that random word in a variable in the form of a question
    var question = [];
    for (var i = 0; 1 < randomSpell.length; i++){
        question[i] = "_";
    }
    var remainingLetters = spell.length;
    
    console.log(question);


// define a variable that stores total # of tries
    var tries = 10;

// have user enter a key
    // Include "Press any key to get started" within HTML.
    // see if i can get program to flash this line until user enters a key
    // use if else statment to also assign "1" as end game key

// listen to the key event
    //window.addEventListener("keyup", this) {
    //    keyof
    //    return letter
    //}
// store key event
    //var letter = []; //user entered key/letter
    //push ???
// check if key pressed matches at each position of the word
// revewal positions matching key pressed
// else     decrease total number of tries by one
    //for (var j = 0; j < question.length; j++){
        //if (letter === charAt(j)){
            //function to display letter
            //else 
            // function tries - 1
    //    }
    //}

// if total number of tries = 0
// then score = score -1
// reset guesses to be total number of guesses
// choose another random word
// repeat game
//if (parseInt(tries) === 0){
    //var loss = loss + 1;
    //var tries = 10;
    //functiont that starts game
//}

// if word is guessed by user
// then score = sore + 1
// reset gueses to be total number of guesses
// choose another random word
// repeat game