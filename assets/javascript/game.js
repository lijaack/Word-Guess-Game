//list of possible words
var randomWordArray =["aliens", "earth", "star", "meteor", "venus", "jupiter", "planet"];
//generate a random word from the array
var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
// check the randomWord length
var positions = randomWord.length;
//make new string with _
var underscores =[];
for (i=0; positions>i; i++){
    underscores.push("_")
}
//wrong guess array
var wrongGuess =[];
//grab html element
var wordGuess = document.getElementById("word-guess");
var wrongGuesses = document.getElementById("wrong-guesses");
//push _ placements into html element
    wordGuess.textContent = underscores.join(" ");

// user guesses a letter
document.onkeyup = function(event) { 

        var userGuess = event.key;

    
        //for this letter, compare it with the letters in the random word
        if (randomWord.indexOf(userGuess)>-1) {

            //if the letter matches, replace _ with letter and push to html
            underscores [randomWord.indexOf(userGuess)] = userGuess;
            wordGuess.textContent = underscores.join(" ");
            }

        //if the letter does not match, move letter to "wrong guesses" box.   
        else if (wrongGuess.indexOf(userGuess)<0){
        wrongGuess.push(userGuess);
        wrongGuesses.textContent = wrongGuess.join(" ")
        }
       
        // if you guess all the letters of the word you win!
        if (underscores.join("")===randomWord){
            alert("YOU WIN!");
        }
        // 5 wrong guesses and you lose!
        else if(wrongGuess.join("").length===5){
            alert("YOU LOSE!");
        }
    }
