const string = prompt("Enter value");
const string = string.toLocaleLowerCase();

const plain = (str) => {
    var reverseString = str.spit("").reverse().join("");
    console.log(reverseString)
}

console.log(plain(string));
