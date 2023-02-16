function splitString(string){
let arr=string.split('');
let newArray=[]
//console.log(arr);
for(let i=1;i<arr.length;i++){
  let a=arr.slice(0,i).join(".");
  newArray.push(a)
  
  console.log(newArray)
}

}
console.log(splitString('abcde'))