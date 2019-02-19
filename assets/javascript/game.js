$(document).ready(function () {
    //******Variables********//
    //Define base variables.  Goal, Current Score, wins, losses, and the four crystals.
    // var displayGoal = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;
    var redGem = Math.floor(Math.random() * 12);
    var greenGem = Math.floor(Math.random() * 12);
    var purpleGem = Math.floor(Math.random() * 12);
    var blueGem = Math.floor(Math.random() * 12);
    var displayGoal = $("#goal");

    // Math.floor();
    // Math.random();
    //call gemNumberGen which is used to call and set the values of the four crystals and the goal.  This does not appear to be working.
    gemNumberGen();
    goal();

    //Sets score, goal, wins, and losses on load.
    $("#currentScore").text(score);
    // $("#goal").text(displayGoal);
    $("#wins").text(wins);
    $("#losses").text(losses);

    //Definining the image click listeners.
    $("#red").click(function () {
        redGem = parseInt(redGem);
        score = score + redGem;
        $("#currentScore").text(score);
        console.log(redGem);
    })
    $("#green").click(function () {
        greenGem = parseInt(greenGem);
        score = score + greenGem;
        $("#currentScore").text(score);
        console.log(greenGem);
    })
    $("#purple").click(function () {
        purpleGem = parseInt(purpleGem);
        score = score + purpleGem;
        $("#currentScore").text(score);
        console.log(purpleGem);
    })
    $("#blue").click(function () {
        blueGem = parseInt(blueGem);
        score = score + blueGem;
        $("#currentScore").text(score);
        console.log(blueGem);
        scoreEval()
    })


})

//******Functions********//
function gemNumberGen() {
    redGem = Math.floor(Math.random() * 12);
    greenGem = Math.floor(Math.random() * 12);
    purpleGem = Math.floor(Math.random() * 12);
    blueGem = Math.floor(Math.random() * 12);
    displayGoal = Math.floor(Math.random() * 101 + 19);
}

function goal() {
    displayGoal = Math.floor(Math.random() * 101 + 19);
    $("#goal").text(displayGoal);
}

function gameReset() {
    gemNumberGen();
    score = 0;
}

function scoreEval() {
    if (displayGoal === score) {
        alert("You won!");
        wins++;
        gameReset();
    } else if (score > displayGoal) {
        alert("Sorry, you lost this time.");
        losses++;
        gameReset();
    }
}
