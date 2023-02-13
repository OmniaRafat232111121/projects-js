//get element into varible

let buttonElement=document.getElementById("btn");

//Events
buttonElement.addEventListener('click',toggleRandomColor)
function toggleRandomColor(){
  document.body.style.backgroundColor="#"+ Math.random().toString(16).slice(2, 8);
}