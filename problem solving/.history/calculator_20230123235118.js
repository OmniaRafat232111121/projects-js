//calculator
const operator = prompt('Please Select operator +/-/%');
const num1 = parseFloat(prompt('enter number 1'));
const num2 = parseFloat(prompt('enter number 2'));
if(operator=='+')
{
    result=num1+num2
}
else if (operator == '-') {
    result = num1 - num2;
    
}
else if (operator == '/') {
    result = num1 / num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result="not found"
}
console.log(`${num1}${operator}${num2} =${result}`)
