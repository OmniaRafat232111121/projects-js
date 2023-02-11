function addCommasUnderScore(num) {
    // Convert To String
  let result = num.toLocaleString(); // Try nu Another Solution With RegExp
  // Convert To Array
  result = result.split("");
  // Update The Last Comma Value
  result[result.length - 4] = "_";
  // Convert To String
  result = result.join("");
  return result;
}
console.log(addCommasUnderScore(510650480910)); 