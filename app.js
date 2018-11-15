$(document).ready(function () {

    var score = 0;
    var currentScore;

    var rock;
    var paper;
    var scissors;

    var userGuess;
    var computerChoices = ['rock', 'paper', 'scissors'];
    var computerGuess;


    function computerChoice() {
        return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    document.getElementById('rock').onclick = function () {
        userGuess = 'rock'
        computerGuess = computerChoice();

        $("#resultImg").empty();

        if (computerGuess === 'rock') {
            console.log(userGuess + ' ties ' + computerGuess);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Draw');
            $('#resultImg').append('<img id="rockTie" src="future-rock.png" width=236px, height=236px />');
        }
        if (computerGuess === 'scissors') {
            console.log(userGuess + ' wins over ' + computerGuess);
            score++;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Winner');
            $('#resultImg').append('<img id="rockWin" src="rockBeatScissor.png"  width=266px, height=266px />');
        }

        if (computerGuess === 'paper') {
            console.log(userGuess + ' lose over ' + computerGuess);
            score--;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Loser');
            $('#resultImg').append('<img id="rockLose" src="paperBeatRock.png" width=240px, height=240px />');
        }
        rock()
    };


    document.getElementById('paper').onclick = function () {
        userGuess = 'paper'
        computerGuess = computerChoice();

        $("#resultImg").empty();

        if (computerGuess === 'paper') {
            console.log(userGuess + ' ties ' + computerGuess);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Draw');
            $('#resultImg').append('<img id="paperTie" src="future-paper.png" width=200px, height=236px />');

        }
        if (computerGuess === 'rock') {
            console.log(userGuess + ' wins over ' + computerGuess);
            score++;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Winner');
            $('#resultImg').append('<img id="paperWin" src="paperBeatRock.png"  width=240px, height=240px />');

        }
        if (computerGuess === 'scissors') {
            console.log(userGuess + ' lose over ' + computerGuess);
            score--;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Loser');
            $('#resultImg').append('<img id="paperLose" src="scissorsBeatPaper.png" width=330px, height=240px />');
        }
        paper()
    };


    document.getElementById('scissors').onclick = function () {
        userGuess = 'scissors'
        computerGuess = computerChoice();

        $("#resultImg").empty();
        
        if (computerGuess === 'scissors') {
            console.log(userGuess + ' ties ' + computerGuess);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Draw');
            $('#resultImg').append('<img id="scissorsTie" src="future-scissors.png" width=200px, height=236px />');

        }
        if (computerGuess === 'paper') {
            console.log(userGuess + ' wins over ' + computerGuess);
            score++;
            console.log(score);
            $('#score').text(score)
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Winner');
            $('#resultImg').append('<img id="rockWin" src="scissorsBeatPaper.png"  width=330px, height=240px />');
        }
        if (computerGuess === 'rock') {
            console.log(userGuess + ' lose over ' + computerGuess);
            score--;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Loser');
            $('#resultImg').append('<img id="rockLose" src="rockBeatScissor.png" width=266px, height=266px />');
        }
        scissors()
    };


    function rock() {
        document.getElementById('userGuess').innerHTML = 'rock'
    }

    function paper() {
        document.getElementById('userGuess').innerHTML = 'paper'
    }

    function scissors() {
        document.getElementById('userGuess').innerHTML = 'scissors'
    }

});