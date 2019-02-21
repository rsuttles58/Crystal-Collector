$(document).ready(function () {
    //******Variables********//
    //Define base variables.  Goal, Current Score, wins, losses, and the four crystals.
    var redGem = Math.floor(Math.random() * 12);
    var greenGem = Math.floor(Math.random() * 12);
    var purpleGem = Math.floor(Math.random() * 12);
    var blueGem = Math.floor(Math.random() * 12);
    var displayGoal;

    //call gemNumberGen which is used to call and set the values of the four crystals and the goal.  This does not appear to be working.
    gemNumberGen();
    goal();

    //Sets score, goal, wins, and losses on load.
    $("#currentScore").text(score);
    $("#goal").text(displayGoal);
    $("#wins").text(wins);
    $("#losses").text(losses);

    //Definining the image click listeners.
    $("#red").click(function () {
        redGem = parseInt(redGem);
        score = score + redGem;
        $("#currentScore").text(score);
        scoreEval();
    })
    $("#green").click(function () {
        greenGem = parseInt(greenGem);
        score = score + greenGem;
        $("#currentScore").text(score);
        scoreEval();
    })
    $("#purple").click(function () {
        purpleGem = parseInt(purpleGem);
        score = score + purpleGem;
        $("#currentScore").text(score);
        scoreEval();
    })
    $("#blue").click(function () {
        blueGem = parseInt(blueGem);
        score = score + blueGem;
        $("#currentScore").text(score);
        scoreEval();
    })


})
//I think there is some fundamental flaw in how I think about document.ready.  Need to study up on the usage, best practices, and flaws to watch out for.
var score = 0;
var wins = 0;
var losses = 0;
//******Functions********//
function gemNumberGen() {
    redGem = Math.floor(Math.random() * 12 + 1);
    greenGem = Math.floor(Math.random() * 12 + 1);
    purpleGem = Math.floor(Math.random() * 12 + 1);
    blueGem = Math.floor(Math.random() * 12 + 1);
    displayGoal = Math.floor(Math.random() * 101 + 19);
}

function goal() {
    displayGoal = Math.floor(Math.random() * 101 + 19);
    $("#goal").text(displayGoal);
}
//Resetting the default position state.
function gameReset() {
    goal();
    gemNumberGen();
    score = 0;
    $("#currentScore").text(score);
    $("#goal").text(displayGoal);
    $("#losses").text(losses);
    $("#wins").text(wins);
}
function scoreEval() {
    if (displayGoal === score) {
        alert("You won!");
        wins++;
        gameReset();
    } else if (score > displayGoal) {
        alert("Sorry, you lost this time.");
        losses = losses + 1;
        gameReset();
    }
}
