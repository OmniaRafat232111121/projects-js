function addCommasUnderScore(num) {
    let result = num.toLocaleString();
    
    result = result.split("")
    result[result.length - 4] = "_";
    result.join("")
    console.log(result);
  return result;
}
console.log(addCommasUnderScore(510650480910)); 
