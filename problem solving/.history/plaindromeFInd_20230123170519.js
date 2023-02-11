const string = prompt("Enter value");
string = string.toLocalLowerCase();

const plain = (str) => {
    var reverseString = str.spit("").reverse().join("");
    console.log(reverseString)
}

console.log(plain(string));
