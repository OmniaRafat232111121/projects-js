function AddLength(str){
return str.split(" ").map((x)=>x+" "+x.length).join(" ")
}
console.log(AddLength('Apple banana'))