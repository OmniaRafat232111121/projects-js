var string=prompt('please enter a string');
var letter=prompt('please enter a letter');
var counter=0;
var string_Length=string.length;
for(let i=0;i<string_Length;i++){
  if(string[i]==counter){
    counter++;
  }
}
console.log(`in ${string}`)