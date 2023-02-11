


const firstLetter = (string) => {
    var newArr = string.split("");
    const title= newArr.map((value) => {
        return value.charAt(0).toUpperCase();
    })

    
}
console.log(firstLetter('omnia rafat'))