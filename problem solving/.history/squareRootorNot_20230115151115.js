function squareRoot(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(Math.sqrt(array[i])))
        {
            newArray.push(Math.sqrt(array[i]));
            }
        else {
            newArray.push(arr[i]*array[])
            
        }
    }
}

console.log(squareRoot([4, 3, 9, 7, 2, 1]));