var string = prompt("Enter value");
      string = string.toLocaleLowerCase();

const plain = (str) => {
    var reverseString = str.spit("").reverse().join("");
    console.log(reverseString)
    if (reverseString === str) {
        return true;
    }
    else {
        return false;
    }
}

console.log(plain(string));
