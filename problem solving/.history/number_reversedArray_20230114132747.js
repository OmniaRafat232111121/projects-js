//convert number to reversedArray



//23456=>[6,5,4,3,2]

function reversedArray(number) {
    let num = number.toString();
    console.log(num)
    let result = num.split("");
    console.log(result);
   
    let total = result.map((x) => {
       return parseInt(x)
    })
    console.log(total);
    let final=total.parseInt()
    
}
console.log(reversedArray(23456))