//Make UpperCase

function makeUpperCase(str) {
    return str.toUpperCase();
    
}
console.log(makeUpperCase('omniarfat'));


//Remove firstElement and last element in string


function removeString(str) {
    return str.slice(1, -1);
}
console.log(removeString('OmniaRfat'))



//simple multication
//even =>8
//odd =>nine




// function multiplication(number) {
// return number % 2 == 0 ? number * 8 : number * 9;
// }
// console.log(multiplication(6));


//Array plus array 
function plusArray(arr1,arr2) {
    return arr1.concat(arr2).reduce((acc, current)
        return acc + current;
    )
}
console.log(plusArray([1,2,3],[4,6,9]))