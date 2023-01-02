const colors = ["green", "red", "rgba(133,122,200)", "#f15025",'blue'];

let color=document.querySelector('.color');
let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    const randomColor=getRandomColor();
    console.log(randomColor);
    document.body.style.backgroundColor
});
function getRandomColor(){
    return Math.floor(Math.random()*colors.length)
}