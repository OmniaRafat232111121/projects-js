// function countByNumber(x, n) {
//     let newArray = [];
//     for (let i = 1; i <= n; i++){
//         newArray.push(x * i);
//     }
//     return newArray;
// }
// console.log(countByNumber(2,5));




// function countByNumber(x, n) {
//     return Array.from(Array(n + 1).keys()).slice(1).map((number)=>number*x);
// }
// console.log(countByNumber(2,5));


function removeExclamation(string) {
    // return string.split("").filter((e) => e !== '!').join("");
}
console.log(removeExclamation('Hello! world!! with Girls!!'))