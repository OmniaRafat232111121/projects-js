function squareNumber(arr) {
    return arr.map((x)=>x+x).reduce((acc,curr))
    
}
console.log(squareNumber([1,2,2])) //1+4+4=9