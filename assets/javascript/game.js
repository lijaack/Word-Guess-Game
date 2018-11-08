var wins = 0;
var loses = 0;



    //list of possible words
    var randomWordArray =["earth", "meteor", "universe", "aliens", "jupiter", "galaxy", "spaceship", "asteroid"];
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
    var wrongGuessesLeft = document.getElementById("wrong-guesses-left");
    var winCount = document.getElementById("wincount");
    var loseCount = document.getElementById("losecount");
    //push _ placements into html element
        wordGuess.textContent = underscores.join(" ");

    // user guesses a letter

    document.onkeyup = function(event) { 
        var userGuess = event.key;

        var indexes = [];


        for(i = 0; i < randomWord.length; i++){
            if (randomWord[i] === userGuess)
                indexes.push(i);
            }

        for(a=0; a<=indexes.length; a++) {
            if  (indexes[a]>-1) {
                underscores[indexes[a]] = userGuess;
                wordGuess.textContent = underscores.join(" ");
            }

            else if (wrongGuess.indexOf(userGuess)<0 && randomWord.indexOf(userGuess)<0 && userGuess.length===1){
            wrongGuess.push(userGuess);
            wrongGuesses.textContent = wrongGuess.join(" ")
            wrongGuessesLeft.textContent = 5 - wrongGuess.length; 
            }
        }
    // if you guess all the letters of the word you win!
        if (underscores.join("")===randomWord){
                wins++;
                winCount.textContent = wins;
                setTimeout(reset, 2000);
            }
    // 5 wrong guesses and you lose!
        else if(wrongGuess.join("").length>=5){
                loses++;
                loseCount.textContent = loses;
                setTimeout(reset, 2000);
        }
    }


function reset(){
    //list of possible words
    var randomWordArray =["abaaeebeaaabeeebbbb", "meteor", "universe"];
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
    var wrongGuessesLeft = document.getElementById("wrong-guesses-left");
    var winCount = document.getElementById("wincount");
    var loseCount = document.getElementById("losecount");
    wrongGuesses.textContent = "";
    wrongGuessesLeft.textContent="5";

    //push _ placements into html element
        wordGuess.textContent = underscores.join(" ");

    // user guesses a letter

    document.onkeyup = function(event) { 
        var userGuess = event.key;

        var indexes = [];


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
    // if you guess all the letters of the word you win!
        if (underscores.join("")===randomWord){
                wins++;
                winCount.textContent = wins;
                setTimeout(reset, 2000);
            }
    // 5 wrong guesses and you lose!
        else if(wrongGuess.join("").length>=5){
                loses++;
                loseCount.textContent = loses;
                setTimeout(reset, 2000);
        }
    }

}