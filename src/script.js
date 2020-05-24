$(document).ready(function(){
  var balloonArray = ["red", "green", "blue", "yellow", "red", "green", "blue", "yellow", "red", "green", "green", "yellow", "red", "red", "blue", "blue", "yellow", "red", "green", "red", "red", "green", "blue", "yellow", "red"];
var popCount = 0;
var options = {};  
var selectedEffect = "explode"; 
  
balloonArray.forEach(initializeBalloons);
function initializeBalloons(item, index) {
  $('<button class="bubbles" id="' + index + '" style="background:' + balloonArray[index] + '"></button>').appendTo("#canvas");
}
function resetBalloons(item, index){
   $("#" + index).remove();
}
//disable balloons till power is clicked
$(".bubbles").prop('disabled', true);
$(".bubbles").css('opacity', '0.6');  
  
$("body").on("mouseenter",".bubbles", function() {
  $("#" + this.id).text("POP!");
  $("#" + this.id).prop('disabled', true);
  $("#" + this.id).fadeTo("slow", 0.0); 
  popCount++;
  console.log(popCount);
  if (popCount == 25) {
    alert("Nice work!!");
  }
});
$("#play").on('click', function() {
  $(".bubbles").prop('disabled', false);
  if (popCount == 0) {
    $('.bubbles').css('opacity', '1.0');  
  }  
}); 
  
$("#reset").on("click", function() {
  balloonArray.forEach(resetBalloons);
  balloonArray.forEach(initializeBalloons);
  popCount = 0;
  $(".bubbles").prop('disabled', false);
});  
});
