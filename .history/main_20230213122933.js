let buttonElement=document.querySelector('.changecolor');
let divELement=document.querySelector('.ground');
let colors=['red','green','blue']
buttonElement.addEventListener('click',function(){
divELement.style.backgroundColor=colors[0]
})