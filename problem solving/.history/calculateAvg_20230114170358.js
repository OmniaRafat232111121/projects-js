function calculateAvg(array) {
    if(array.length===0 || array===null )
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let final = sum / array.length;
    return final;
}
console.log(calculateAvg([1,2,3,4]))