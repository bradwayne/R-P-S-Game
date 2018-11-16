// var backgroundMusic = new Audio("assets/audio/background_dark_evolving_nightmare_01.mp3");

var backgroundMusic = new Audio("assets/audio/background_enemy_03.mp3");

var attachSound = new Audio("assets/audio/bomb-sound-effect.mp3");


function pauseAudio() {
    if (document.getElementById('navAudio').classList.contains('play')) {
        document.getElementById('navAudio').classList.add('mute');
        document.getElementById('navAudio').classList.remove('play');
        document.getElementById('audio_on').style.display = 'none';
        document.getElementById('audio_mute').style.display = 'inline';
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    } else if (document.getElementById('navAudio').classList.contains('mute')) {
        document.getElementById('navAudio').classList.add('play');
        document.getElementById('navAudio').classList.remove('mute');
        document.getElementById('audio_on').style.display = 'inline';
        document.getElementById('audio_mute').style.display = 'none';
        backgroundMusic.play();
    }
}

// backgroundMusic.addEventListener('ended', function () {
//     this.currentTime = 0;
//     this.play();
// }, false);

// backgroundMusic.play();

$("#navAudio").click(pauseAudio);

// attachSound.play();





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
            $('#resultImg').append('<img id="rockTie" src="assets/images/future-rock.png" width=236px, height=236px />');
        }
        if (computerGuess === 'scissors') {
            console.log(userGuess + ' wins over ' + computerGuess);
            score++;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Winner');
            $('#resultImg').append('<img id="rockWin" src="assets/images/rockBeatScissor.png"  width=266px, height=266px />');
        }

        if (computerGuess === 'paper') {
            console.log(userGuess + ' lose over ' + computerGuess);
            score--;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Loser');
            $('#resultImg').append('<img id="rockLose" src="assets/images/paperBeatRock.png" width=240px, height=240px />');
        }
        attachSound.play();
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
            $('#resultImg').append('<img id="paperTie" src="assets/images/future-paper.png" width=200px, height=236px />');

        }
        if (computerGuess === 'rock') {
            console.log(userGuess + ' wins over ' + computerGuess);
            score++;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Winner');
            $('#resultImg').append('<img id="paperWin" src="assets/images/paperBeatRock.png"  width=240px, height=240px />');

        }
        if (computerGuess === 'scissors') {
            console.log(userGuess + ' lose over ' + computerGuess);
            score--;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Loser');
            $('#resultImg').append('<img id="paperLose" src="assets/images/scissorsBeatPaper.png" width=330px, height=240px />');
        }
        attachSound.play();
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
            $('#resultImg').append('<img id="scissorsTie" src="assets/images/future-scissors.png" width=200px, height=236px />');

        }
        if (computerGuess === 'paper') {
            console.log(userGuess + ' wins over ' + computerGuess);
            score++;
            console.log(score);
            $('#score').text(score)
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Winner');
            $('#resultImg').append('<img id="rockWin" src="assets/images/scissorsBeatPaper.png"  width=330px, height=240px />');
        }
        if (computerGuess === 'rock') {
            console.log(userGuess + ' lose over ' + computerGuess);
            score--;
            console.log(score);
            $('#score').text(score);
            $('#computerGuess').text(computerGuess);
            $('#currentScore').text(currentScore = 'Loser');
            $('#resultImg').append('<img id="rockLose" src="assets/images/rockBeatScissor.png" width=266px, height=266px />');
        }
        attachSound.play();
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