function calculateAvg(array) {
    if (array.length === 0 || array === null) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let final = sum / array.length;
    return final;
}
console.log(calculateAvg([3,4,5,]))