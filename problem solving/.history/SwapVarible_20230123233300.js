// let a = 4;
// let b = 6;
// let temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);
// console.log(temp);

// [a, b] = [b, a];
// console.log(` value of ${a} and value of ${b}`)


// var arr1 = [2, 4, 8, 9, 10,12];
// var arr2 = [4, 8, 9, 2, 10, 12];
// const isArraySame = arr1.length == arr2.length &&
// arr1.every((element) => {
//     if (arr2.indexOf(element) > -1)
//     {
//         return (element=[arr2.indexOf(element)])
//         }
// })
// console.log(isArraySame)



//intersectio of twoarray
 var arr1 = [2, 4, 8, 3, 10,12,12];
var arr2 = [4, 8, 8, 2, 30, 12];
let intersectionArr = arr1.filter((element) => {
    return arr2.includes(element)
})
console.log([...new Set(intersectionArr)])
