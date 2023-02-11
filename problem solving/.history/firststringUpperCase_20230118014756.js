


const firstLetter = (string) => {
    var newArr = string.split(" ");
    var array= newArr.map((value) => {
        return value.charAt(0) +value slice(1);
    })
    return array;

    
}
console.log(firstLetter('omnia rafat'))