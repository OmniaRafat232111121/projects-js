//[1,2,3,4,2,1,4]=>[1,2,3,4]
function dublicateArray(array) {
    return array.filter((x,index,array)=>array.indexOf(x)!==index)
    
}
console.log(dublicateArray([1,2,3,4,2,1,4]))