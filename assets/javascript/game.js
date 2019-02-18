
//******Functions********//
function gemNumberGen() {
    redGem = Math.floor(Math.random * 12);
    greenGem = Math.floor(Math.random * 12);
    purpleGem = Math.floor(Math.random * 12);
    blueGem = Math.floor(Math.random * 12);
    totalGoal = Math.floor(Math.random * 101 + 19);
}

$(document).ready(function () {
    //******Variables********//
    //Define base variables.  Goal, Current Score, wins, losses, and the four crystals.
    var totalGoal = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;
    var redGem = 0;
    var greenGem = 0;
    var purpleGem = 0;
    var blueGem = 0;

    Math.floor()
    Math.random()
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
    })
    $("#green").click(function () {
        greenGem = parseInt(greenGem);
        score = score + greenGem;
    })
    $("#purple").click(function () {
        purpleGem = parseInt(purpleGem);
        score = score + purpleGem;
    })
    $("#blue").click(function () {
        blueGem = parseInt(blueGem);
        score = score + blueGem;
    })

})
