//list of possible words
var randomWordArray =["aliens", "earth", "star", "meteor", "venus", "jupiter", "planet"];
//generate a random word from the array
var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
// check the randomWord length
var positions = randomWord.length;
//make new string with _
var underscores =[]
for (i=0; positions>i; i++){
    underscores.push("_")
}
//grab html element
var wordGuess = document.getElementById("word-guess");
//push _ placements into html element
    wordGuess.textContent = "Guess the Word: " + underscores;

//user guesses a letter
document.onkeyup = function(event) { 
    var userGuess = event.key;
//for this letter, compare it with the letters in the random word
    if (randomWord.indexOf(userGuess)>-1) {
//if the letter matches, push the letter into html position
        underscores [randomWord.indexOf(userGuess)] = userGuess;
        wordGuess.textContent = "Guess the Word: " + underscores;
    }
}


// if the user's guess is a letter in the random word, replace the content in the "answer".
// var index=randomWord.indexOf(userGuess);
// if (index>-1) {
//     answer[index]=userGuess;
//