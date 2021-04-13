const colors = ["green", "red", "rgba(133,122,200)", "#f15025","hsl(125, 67%, 44%)"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color")

btn.addEventListener("click",function(){
    const randomNumber=getRandomNumber(colors.length);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber]; 
});

function getRandomNumber(x){
    return Math.floor(Math.random()*x);
}