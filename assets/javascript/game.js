
// var pguess = Math.floor(Math.Random()*letters.length);
// var uguess= $("#").value();

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
                        "r","s","t","u","v","w","x","y","z"];


var lettersGuessed = [];

var guessesLeft = 10;

var wins = 0;
var losses = 0;

//generate random number
//grab entered letter
//update letters guessed
//updated guesses
//update wins/losses
//reset

function psychic(){
let letter = Math.floor(Math.Random()*letters.length)
}


document.onkeydown = function(event) {
   psychic();
    guessesLeft--;
    lettersGuessed();

    if(letter === p){
        wins++;
        startOver();
    }
    if(letter ===0){
        losses++
        startOver()
    }
        
}

function lettersGuessed(){
    var x = document.getElementById("guesses").value
    $("#guesses").innerHTML = x
}
function showLetterToGuess() {

    document.$("letterToGuess").innerHTML = letterToGuess;
  };

function guessesLeft (){
  guesses--;
  $("#guessesLeft").innerHTML = guesses;
};

function letterToGuess() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

function guesses() {
  document.getElementById("guesses").innerHTML = guessedLetters.join(", ");
};

function startOver() {
  //reset the game code heree
}      
