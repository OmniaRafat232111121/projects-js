function elementArray(arr) {
    const value = Math.max(...arr);
    console.log(value);
    index = arr.indexOf(value);
    console.log(index);
    let element = arr.splice(index, 1);
    console.log(element)
    console.log(arr);
    let val

}
console.log(elementArray([12, 30, 40, 50]));



//