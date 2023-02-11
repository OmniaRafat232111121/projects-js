// function countByNumber(x, n) {
//     let newArray = [];
//     for (let i = 1; i <= n; i++){
//         newArray.push(x * i);
//     }
//     return newArray;
// }
// console.log(countByNumber(2,5));




function countByNumber(x, n) {
    return Array.from(Array(n + 1).keys()).slice(0);
}
console.log(countByNumber(2,5));