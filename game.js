/*variable defination*/
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var started = false;

/*starting or restarting the game*/
$(document).keypress(function () {
  if (!started) {
    $("h1").text("Level - " + level);
    nextsequence();
    started = true;
  }
});
/* user input storing */
$(".btn").click(function () {
  userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);
  makeSound(userChosenColor);
  animate(userChosenColor);
  checkAnswer(userPattern.length - 1);
});
/* comparing user input and game pattern*/
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    console.log("Success");
    if (gamePattern.length === userPattern.length) {
      setTimeout(function () {
        nextsequence();
      }, 1000);
    }
  } 
  else {
    $("h1").text("Game Over, Press Any Key to Restart");
    makeSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 1000);
    startOver();
  }
}
/* button animation on random number*/
function nextsequence() {
  userPattern = [];
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  animate(randomChosenColor);
  makeSound(randomChosenColor);
  level++;
  $("h1").text("Level - " + level);
}
/*playing sound of different buttons*/
function makeSound(colorForMusic) {
  var audio = new Audio("sounds/" + colorForMusic + ".mp3");
  audio.play();
}
/* animation to display event occurance*/
function animate(colorToAnimate) {
  $("#" + colorToAnimate)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}
/*startover the game*/
function startOver()
{
 level =0;
 gamePattern =[];
 started = false ;

}