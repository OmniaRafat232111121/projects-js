//convert number to reversedArray



//23456=>[6,5,4,3,2]

function reversedArray(number) {
    let num = number.toString();
    console.log(num)
    let result = num.split("").;
   
    let total = result.reverse();
    console.log(total);
    
}
console.log(reversedArray(23456))