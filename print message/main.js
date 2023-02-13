//get element into varible
let inputElement=document.getElementById("input");
let buttonElement=document.getElementById("btn");
let paraELement=document.getElementById('para');
//Events
buttonElement.onclick=function(){

  var inputValue= inputElement.value;

  if(inputValue.length > 0 ||null ){
  //put value on paragr
  paraELement.innerHTML=inputValue;
  //empty Value after insertion

  inputElement.value=" "
  }
  else{
    alert('you Should put value')
    console.log('Helo')
  }
}