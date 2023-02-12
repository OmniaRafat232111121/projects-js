<<<<<<< HEAD


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
=======


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
>>>>>>> d8386487acc694cdd3ca41752ffa54818bb79d81
console.log(removeElement(["keep",'remove',"keep",'remove',"keep",'remove',"keep",'remove']))