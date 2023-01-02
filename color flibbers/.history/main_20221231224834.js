const colors = ["green", "red", "rgba(133,122,200)", "#f15025",'blue'];

let color=document.querySelector('.color');
let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    //get radom between 0-3
    const randomColor=getRandomNumber();
    console.log(randomColor);
    document.body.style.backgroundColor=colors[randomColor];
    color.textContent=colors[randomColor]
})

function getRandomNumber(){
    return  (Math.random());
}