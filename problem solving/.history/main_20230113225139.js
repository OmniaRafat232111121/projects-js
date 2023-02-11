function addCommasUnderScore(num) {
    let result = num.toString();
    result = result.split(); //number
    result[result.length - 4] = '_';
    result = result.join("");
    return result;//string
}
console.log(addCommasAndUnderscore(510650480910)); 