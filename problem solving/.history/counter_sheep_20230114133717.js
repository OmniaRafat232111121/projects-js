function counterSheep(array) {
    let counter = 0;
    array.map((x) => {
        if (x === true) {
            counter++;
        }
        return array;
    })
    
}
console.log(counterSheep(['true','true','false','true','false']))