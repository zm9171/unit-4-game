$(document).ready(function(){
    var totalScore = 0;
    var numberGoal = 0;
    var wins = 0;
    var losses = 0;

    function random() {
        var randomNumber = Math.floor(Math.random() * (max - min)+ min);
        console.log(randomNumber); 
    }
    
    function crystalval(whichcrystal){
        randomNumber= random(19,120);
        $("#numberGoal").text(randomNumber);
        crystalvalue = crystalval(1,12);
        $("#"+ whichcrystal).attr("data-value", crystalvalue);
    }
    function newGame(){
        numberGoal = random(19,120);
        $("#numberGoal").text(numberGoal);
        
        $(".crystal").each(function(){
            crystalval($(this).attr('id'));
        })
    }
    function gameOver(){
        if (totalScore == numberGoal){
            wins++;
            $("#wins").text("Wins: " + wins);
            alert("YOU WIN!")
            
            newGame();
            totalScore= 0;
        }
        else if(totalScore > numberGoal){
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("YOU LOSE!")

            newGame();
            totalScore= 0;
        }
    $(".crystal").on ("click", function(){
        totalScore = parseInt($(this).attr("data-value"));
        $("#totalScore").text(totalScore);
        gameOver();
    });
    newGame();
    }
});