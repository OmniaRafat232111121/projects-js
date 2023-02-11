function counterSheep(array) {
    let counter = 0;
    array.map((x) => {
        if (x === true) {
            counter++;
        }
        return counter;
    })
    
}
console.log(counterSheep([true,false,true]))