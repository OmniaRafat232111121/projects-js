let buttonElement=document.querySelector('.changecolor');
let divELement=document.querySelector('.ground');
let colors=['red','green','blue']
let i=0
buttonElement.addEventListener('click',function(){
divELement.style.backgroundColor=colors[i];
i++;

})