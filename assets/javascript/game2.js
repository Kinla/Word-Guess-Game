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

// help // store that random word in a variable in the form of a question
    var question = [];

