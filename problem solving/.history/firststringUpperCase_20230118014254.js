


const firstLetter = (string) => {
    var newArr = string.split("");
    const title= newArr.map((arr) => {
        return arr.charAt(0).toUpperCase();
    })

    
}
console.log(firstLetter('omnia rafat'))