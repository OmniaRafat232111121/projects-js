const inputNumber=prompt("please enter number");
const fact=1;
if(inputNumber<0){
  console.log(`input number is under zero {inputNumber} is not possible`)
}
else{
  for(let i=1;i<=inputNumber;i++){
    fact=fact*i;
  }
  console.log(`factorial number of ${inputNumber} is ${}`)
}