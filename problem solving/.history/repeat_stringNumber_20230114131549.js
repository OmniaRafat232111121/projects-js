function repeatString(num, str) {
    // let newString = " ";
    // for (let i = 0; i < num; i++){
    //      newString += str;
        
    // }
    // return newString;
    let newString = str.repeat(num);
    return newString;
    
}
console.log(repeatString(5,'Hello'))