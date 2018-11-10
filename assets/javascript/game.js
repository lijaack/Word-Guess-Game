document.addEventListener("DOMContentLoaded", newGame())


var wins = 0;
var loses = 0;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

function newGame(){

    var randomWordArray =["earth", "meteor", "universe", "aliens", "jupiter", "galaxy", "spaceship", "asteroid"];

    var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  
    var positions = randomWord.length;
  
    var underscores =[];
    for (i=0; positions>i; i++){
        underscores.push("_")
    }

    var wrongGuess =[];
    var imgSRC = "assets/images/"+randomWord+".jpg";
    var wordGuess = document.getElementById("word-guess");
    var wrongGuesses = document.getElementById("wrong-guesses");
    var wrongGuessesLeft = document.getElementById("wrong-guesses-left");
    var wordImages = document.getElementById("word-images");
    var winCount = document.getElementById("wincount");
    var loseCount = document.getElementById("losecount");



        wordGuess.textContent = underscores.join(" ");
        wrongGuesses.textContent = "";
        wrongGuessesLeft.textContent="5";

    document.onkeyup = function(event) { 
        if (underscores.join("")!==randomWord && wrongGuess.length<5){

            var userGuessN = event.key;
            var userGuess = userGuessN.toLowerCase();
            var indexes = [];

            if (alphabet.indexOf(userGuess)>-1){
                for(i = 0; i < randomWord.length; i++){
                    if (randomWord[i] === userGuess)
                        indexes.push(i);
                    }

                for(a=0; a<=indexes.length; a++) {
                    if  (indexes[a]>-1) {
                        underscores[indexes[a]] = userGuess;
                        wordGuess.textContent = underscores.join(" ");
                    }

                    else if (wrongGuess.length<6 &&wrongGuess.indexOf(userGuess)<0 && randomWord.indexOf(userGuess)<0 && userGuess.length===1){
                    wrongGuess.push(userGuess);
                    wrongGuesses.textContent = wrongGuess.join(" ")
                    wrongGuessesLeft.textContent = 5 - wrongGuess.length; 
                    }
                }
               
                if (underscores.join("")===randomWord){
                        wins++;
                        winCount.textContent = wins;
                        wordImages.setAttribute("src", imgSRC);
                        setTimeout(newGame, 1000);
                }
             
                else if(wrongGuess.join("").length>=5){
                        loses++;
                        loseCount.textContent = loses;
                        setTimeout(newGame, 1000);
                }
            }

        }
    }   
}