
 var randomNumber1= Math.floor(Math.random()*6) +1;
 var randomImage1="images/dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src",randomImage1);

var randomNumber2= Math.floor(Math.random()*6) +1;
var randomImage2="images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 won!";
  document.querySelector("h1").style.textAlign="left";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 won🚩!";
  document.querySelector("h1").style.textAlign="right";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
