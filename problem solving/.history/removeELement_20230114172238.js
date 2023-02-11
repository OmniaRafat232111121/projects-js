

function removeElement(arr) {
    return arr.filter((a, i) => i % 2 == 0);
}
console.log(removeElement(["keep", 'remove', "keep", 'remove', "keep", 'remove', "keep", 'remove']))
function removeElement(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 0) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
console.log(removeElement(["keep",'remove',"keep",'remove',"keep",'remove',"keep",'remove']))