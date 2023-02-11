


const firstLetter = (string) => {
    var newArr = string.split("");
    var array= newArr.map((value) => {
        return value.charAt(0).toUpperCase();
    })
    

    
}
console.log(firstLetter('omnia rafat'))