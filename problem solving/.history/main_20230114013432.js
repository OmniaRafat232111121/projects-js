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

// function longestWord(sentence) {
//     let longWord = sentence.split("");
//     longWord.reduce(function (longest, current) {
//         return current.length > longest.length ? current : longest;
        
//     })
//     return longWord;
    
// }
// console.log(longestWord('Hello Good Morning'));




//number to reversed Array
// function convert(n) {
//     //number=>string
//     let array = n.toString();
//     console.log(array);
//     //string=>array
//     let result = array.split("");
//     let total = result.map((x) => {
//         return parseInt(x)
//     })

    
//     //console.log(result);
//     let final = total.reverse();
//     console.log(final);
//     //for each element in array to number
//     //reverse
    
// }
// console.log(convert(6738452));



// function even_or_odd(number) {
//     if (number % 2 == 0) {
//         console.log('Even number')
//     }
//     else {
//         console.log('Odd Number')
//     }
// }
// function even_or_odd(number) {
//     return number % 2 == 0 ? "Even" : "odd";
// }
// console.log(even_or_odd(5));



//calculate sum of array
//array[-1,2,3,4,-5] sum of positive[2,3,4]=9
// function sumOfArray(arr) {
//     //initailaValue=0
//     let initalValue = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > 0) {
//             initalValue  += arr[i];
            
//         }
//     }
//     return initalValue;
    
    
// }
// console.log(sumOfArray([-1,2,3,4,-5]))

// function sumOfArray(arr) {
//     return arr.filter((x) => x > 0).
//         reduce((acc, current) => acc + current
//         )
        
// }
    

// console.log(sumOfArray([-1,2,3,4,-5]))



//sum of  without Highest and lowest array

function sumALl(arr) {
    if (arr == null) {
        return 0;

    }
    else {
        let maxValue=Ma

    }
}
console.log(sumALl([1,2,3,4,10,5]))