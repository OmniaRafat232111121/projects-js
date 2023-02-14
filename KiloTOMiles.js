//kilometer to miles
//1kilo=0.621361miles
//km=factor* number
const userInput = prompt("Enter the UserInput Of Number");
const factor = 0.621361;
const kilometer = userInput * factor;
console.log(`${userInput} km is =${kilometer} miles`)
