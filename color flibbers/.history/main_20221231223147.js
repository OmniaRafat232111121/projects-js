const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let color=document.querySelector('.color');
let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    //get radom between 0-3
    const randomColor=2
    document.body.style.backgroundColor=colors[randomColor];
    colors.textContent=colors[ra]
})