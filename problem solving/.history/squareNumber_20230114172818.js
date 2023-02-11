function squareNumber(arr) {
    return arr.map((x)=>x+x).reduce((acc,current),0)
    
}
console.log(squareNumber([1,2,2])) //1+4+4=9