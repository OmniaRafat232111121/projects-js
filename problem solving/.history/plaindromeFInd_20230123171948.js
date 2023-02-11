var string = prompt("Enter value");
var result = string.toLocaleLowerCase();

//console.log(result);
var reverseString = result.split("") .reverse().join("");
console.log(reverseString)
if (reverseString === string) {
    return true
}
