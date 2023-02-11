// function addCommasUnderScore(num) {
//     let result = num.toLocaleString();
    
//     result = result.split("")
//     result[result.length - 4] = "_"; //array to string
//      result = result.join("");
//   return result;
  
// }
// console.log(addCommasUnderScore(234553342224)); 


function removeCharFrom(word, char) {
    return word.
         split(" ")
        .filter(function (c) {
            return c !== c.toLowerCase() && c !== c.toUpperCase();
    }).join("")
   
    
}


console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));