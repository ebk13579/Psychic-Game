$(document).ready(function () {
    console.log("Yass");
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var randomLetter = letters[Math.floor(Math.random() * 26)];
    console.log(randomLetter);
    var winCount = 0;
    var guessCount = 0;
    var loseCount = 0;
    var letterGuess = [];
    var reset = function () {
        guessCount = 0;
        letterGuess = [];
        randomLetter = letters[Math.floor(Math.random() * 26) + 1];
    }
    $(document).on('keypress', function (e2) {
        var inputLetter = e2.key.toUpperCase();

        console.log(inputLetter);

        if (inputLetter === randomLetter) {
            winCount = winCount + 1;
            console.log("Win(s): " + winCount);
            reset();
        }
        else {
            letterGuess.push(inputLetter.toUpperCase());
            guessCount = guessCount + 1;
            console.log("Letter Guess: " + letterGuess);
            console.log("Guess(es): " + guessCount);
        }
        if (guessCount > 9) {
            loseCount = loseCount + 1;
            console.log("Lose(es): " + loseCount);
            reset();
        }
        var guessRemain = 10 - guessCount;
        var html =
            "<h1>Guess what letter I'm thinking of...</h1>" +
            "<br>" +
            "<h3>Wins: " + winCount + "</h3>" +
            "<h3>Losses: " + loseCount + "</h3>" +
            "<br>" +
            "<h3>Guesses left: " + guessRemain + "</h3>" +
            "<h3>Your guesses thus far: " + letterGuess.join(", ") + "</h3>";
        document.getElementById("Game").innerHTML = html;
    });
});