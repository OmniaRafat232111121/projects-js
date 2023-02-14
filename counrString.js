function countString(str){
let obj={};
str.split("").forEach(char => {
  // if(obj[char]){
  //   obj[char]=  obj[char]+1
  // }
  // else{
  //   obj[char]=1
  // }
  obj[char] =obj[char] ?  obj[char]+1:  obj[char]=1
});
return obj;
}
console.log(countString("abccdaea"))