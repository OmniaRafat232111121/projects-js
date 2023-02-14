// const inputNumber=prompt("please enter number");
// var fact=1;
// if(inputNumber<0){
//   console.log(`input number is under zero {inputNumber} is not possible`)
// }
// else{
//   for(let i=1;i<=inputNumber;i++){
//     fact=fact*i;
//   }
//   console.log(`factorial number of ${inputNumber} is ${fact}`)
// }




// function factorial(n){
// if(n==0){
//   return 1;

// }
// return n * factorial(n-1)
// }
// console.log(factorial(5))



//swap parameter

// let  x=20;
// let y=10;
//  [x,y]=[y,x]
//  console.log(x);
//  console.log(y);


function range(start,end,step){
  let arr=[];
  for(let i=start;i<=end;i+=step){
    arr.push(i)
  }
  return arr;
}
console.log(range(1,5,1))