var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;


var diceImage1="images/dice"+randomNumber1+".png";
var diceImage2="images/dice"+randomNumber2+".png";


var image1=document.querySelector(".img1").setAttribute("src", diceImage1);
var image2=document.querySelector(".img2").setAttribute("src", diceImage2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 won";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 2 won";
}else{
    document.querySelector("h1").innerHTML="☹️ Draw";
}

