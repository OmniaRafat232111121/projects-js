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

// function removeDuplicateWordsFrom(sentence) {
//   let wordsList = sentence.split(" ");
//   let result = [];
//   for (let i = 0; i < wordsList.length; i++) {
//     if (result.indexOf(wordsList[i]) === -1) {
//       result.push(wordsList[i]);
//     }
//   }
//   return result.join(" ");
// }

// console.log(removeDuplicateWordsFrom("Hello Web Web Hello School"));


// function removeDuplicateWordsFrom(sentence) {
//     let result = sentence.split(" ");
//     console.log(result);
//     let newSet = new Set(result);
//     console.log(newSet);
//     let array = Array.from(newSet);
//     console.log(array);
//     let total = array.join(" ");
//     console.log(total);

// }
// console.log(removeDuplicateWordsFrom("Hello Web Web Hello School"));

function longestWord(sentence) {
    let longWord = sentence.split("");
    longWord.reduce()
    
}
console.log(longestWord('Hello Good Morning'));
