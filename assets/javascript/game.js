$(document).ready(function () {
    //******Variables********//
    //Define base variables.  Goal, Current Score, wins, losses, and the four crystals.
    var totalGoal = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;
    var redGem = Math.floor(Math.random * 12);
    var greenGem = Math.floor(Math.random * 12);
    var purpleGem = Math.floor(Math.random * 12);
    var blueGem = Math.floor(Math.random * 12);

    Math.floor();
    Math.random();
    //call gemNumberGen which is used to call and set the values of the four crystals and the goal.  This does not appear to be working.
    gemNumberGen();

    //Sets score, goal, wins, and losses on load.
    $("#currentScore").text(score);
    $("#goal").text(totalGoal);
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
        console.log(redGem);
    })
    $("#purple").click(function () {
        purpleGem = parseInt(purpleGem);
        score = score + purpleGem;
        $("#currentScore").text(score);
        console.log(redGem);
    })
    $("#blue").click(function () {
        blueGem = parseInt(blueGem);
        score = score + blueGem;
        $("#currentScore").text(score);
        console.log(redGem);
    })

})

//******Functions********//
function gemNumberGen() {
    redGem = Math.floor(Math.random * 12);
    greenGem = Math.floor(Math.random * 12);
    purpleGem = Math.floor(Math.random * 12);
    blueGem = Math.floor(Math.random * 12);
    totalGoal = Math.floor(Math.random * 101 + 19);
}