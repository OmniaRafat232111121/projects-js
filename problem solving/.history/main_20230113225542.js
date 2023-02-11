function addCommasUnderScore(num) {
    // Convert To String
  // Convert To Array
  let result = num.toLocaleString(); // Tr Another Solution With RegExp
  result = result.split("");
  // Update The Last Comma Value
  result[result.length - 4] = "_";
  // Convert To String
  result = result.join("");
  return result;
}
console.log(addCommasUnderScore(510650480910)); 

1)//