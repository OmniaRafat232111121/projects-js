//get element into varible
let inputElement=document.getElementById("inputPassword");
let buttonElement=document.getElementById("btn");

//Events
buttonElement.addEventListener('click',togglePassword);
function togglePassword(){
  if(buttonElement.getAttribute('data-text')=='show'){
    inputElement.setAttribute('type','text');
    buttonElement.setAttribute('data-text','hide')
    buttonElement.innerHTML="Hide"
  }
  else{
    inputElement.setAttribute('type','password');
    buttonElement.setAttribute('data-text','show');
    buttonElement.innerHTML="show";
  }
}
