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

var names = [
    "Dobby",
    "Gellert Grindelwald",
    "Ginny Weasley",
    "Gilderoy Lockhart",
    "Albus Severus Potter",
    "Molly Weasley",
    "Alastor Moody",
    "Minerva McGonagall",
    "Dolores Umbridge",
    "Lucius Malfoy",
    "Newt Scamander",
    "Remus Lupin",
    "Luna Lovegood",
    "Rubeus Hagrid",
    "George Weasley",
    "Bellatrix Lestrange",
    "Draco Malfoy",
    "Sirius Black",
    "Voldemort",
    "Neville Longbottom",
    "Albus Dumbledore",
    "Severus Snape",
    "Ron Weasley",
    "Hermione Granger",
    "Harry Potter"
];