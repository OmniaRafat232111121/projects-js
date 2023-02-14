// let inputNumber=prompt('enter the Number');
// function Sum(inputNumber){
//   let sum=0;
// for(let i=1;i<=inputNumber;i++){
//    sum+=i;
  

// }
// console.log(sum)

// }
// Sum(inputNumber);


function countChar(str,char){
let count=0;
for(let i=0;i<str.length;i++){
  if(str[i]==char){
    count++;
  }
}
console.log(count)
}
countChar("Hello","H")