// function sumMixedArray(x){
//   return x.map((n)=>Number(n)).reduce((acc,current)=>acc+current,0)

// }
// console.log(sumMixedArray(['1','2',3,4]))



function Sum(arr){
let newArray=[];
for(let i=0;i<arr.length;i++){
  if(typeof arr[i]=='string'){
    newArray.push(Number(arr[i]))
  }
  else{
    newArray.push(arr[i])
  }
}
return newArray.reduce((acc,current)=>acc+current,0)
}
console.log(Sum(['1','2',3,4]))