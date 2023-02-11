// function addCommasUnderScore(num) {
//     let result = num.toLocaleString();
    
//     result = result.split("")
//     result[result.length - 4] = "_"; //array to string
//      result = result.join("");
//   return result;
  
// }
// console.log(addCommasUnderScore(234553342224));


// function removeCharFrom(word, c) {
//     return word.split("").filter(function (char) {
//          return char !== c.toLowerCase() && char !== c.toUpperCase();
//     }).join("")
        
    
// }


// console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));

function removeDuplicateWordsFrom(sentence) {
    let result = sentence.split("");
    console.log(result);
    let array = [];
    for (let i = 0; i < result.length; i++){
       if (result.indexOf(wordsList[i]) === -1) {
      array.push(wordsList[i]);
    }
    }
    return array.join("")
    
}


console.log(removeDuplicateWordsFrom("Hello Elzero Web Web Hello School"));