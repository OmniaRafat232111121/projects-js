function squareRoot(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(Math.sqrt(array[i])))
        {
            newArray.push(Math.sqrt(array[i]));
            }
        else {
            newArray.push(array[i]*array[i]])
            
        }
    }
}

console.log(squareRoot([4, 3, 9, 7, 2, 1]));