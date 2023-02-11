// function addCommasUnderScore(num) {
//     let result = num.toLocaleString();
    
//     result = result.split("")
//     result[result.length - 4] = "_"; //array to string
//      result = result.join("");
//   return result;
  
// }
// console.log(addCommasUnderScore(234553342224)); 


function removeCharFrom(word, c) {
    return word.split("").filter(function (char) {
         return char !== c.toLowerCase() && char !== c.toUpperCase();
    })
        
    
}


console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));