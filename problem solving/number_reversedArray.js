<<<<<<< HEAD
//convert number to reversedArray



//23456=>[6,5,4,3,2]

function reversedArray(number) {
    let num = number.toString();
    console.log(num)
    let result = num.split("");
    console.log(result);
   
    let total = result.map((x) => {
       return Number(x)
    })
    console.log(total);
    let final = total.reverse();
    console.log(final);
    
    
}
console.log(reversedArray(23456));
=======
//convert number to reversedArray



//23456=>[6,5,4,3,2]

function reversedArray(number) {
    let num = number.toString();
    console.log(num)
    let result = num.split("");
    console.log(result);
   
    let total = result.map((x) => {
       return Number(x)
    })
    console.log(total);
    let final = total.reverse();
    console.log(final);
    
    
}
console.log(reversedArray(23456));
>>>>>>> d8386487acc694cdd3ca41752ffa54818bb79d81
