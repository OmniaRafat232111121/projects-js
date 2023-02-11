

function removeElement(arr) {
    return arr.filter((a, i) => i % 2 == 0);
}
console.log(removeElement(["keep", 'remove', "keep", 'remove', "keep", 'remove', "keep", 'remove']))
function removeElement(arr) {
    let  = [];
    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 0) {
            .push(arr[i])
        }
    }
    return ;
}
console.log(removeElement(["keep",'remove',"keep",'remove',"keep",'remove',"keep",'remove']))