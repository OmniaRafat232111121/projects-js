// var string=prompt('please enter a string');
// var letter=prompt('please enter a letter');
// var counter=0;
// var string_Length=string.length;
// for(let i=0;i<string_Length;i++){
//   if(string[i]==letter){
//     counter++;
//   }
// }
// console.log(`in ${string} ocuurance of ${letter}  is equal ${counter}`)



// class Car{
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;

//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2013);
// document.getElementById("demo").innerHTML =
// "My car is " + myCar.age() + " years old.";


//class inhertance
// class Car{
//   constructor(model,name){
//     this.model=model;
//     this.name=name;

//   }
//   start(){
//     console.log(this.name);
//     console.log('Car Started')
//   }
//   end(){
//     console.log('Car stopped')
//   }
// }
// class Electrical extends Car{
//   dashboard(){
//     console.log('Child Method')
//   }
//   start(){
//     super.end();
//     super.start();
//   }
// }
// evaCar=new Electrical('Tesla','221A');
// evaCar.start()



//program duplicate array

// const duplicateArray=[13,12,9,34,13,9];
// const duplicate=duplicateArray.filter((Element,index,array)=>array.indexOf(Element)!==index)
// console.log(duplicate)
// Count Duplicate Values In An Array
//using for each
//1-for each()
//2-if element is already exist() =>increment count
//3- else initial count=14


// const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];
// const elementCount={};
// myArray.forEach(element=>{
//   elementCount[element]=(elementCount[element] || 0 )+1;
// })
// console.log(elementCount)


//check program if is integer
// const number='Hello';
// console.log(!isNaN(number))


// const object = {
// 	name : "John"
// };



// console.log(Object.freeze(object));

// object.name = "ali"; 
// console.log(Object.freeze(object));


// const unsortedArray=[10,20,30,21,8,3];
// const sortedArray=unsortedArray.sort((a,b)=>{
//   return a-b
// })
// console.log(sortedArray)
// const myArray=[5,16,187,29,30];
//  const newArray=myArray.reduce(function(acc,current){
//   return acc> current ? acc :current
// })
// console.log(newArray);


//sum of Array
// const myArray=[5,16,187,29,30];
// const totalCount=myArray.reduce((a,b)=>a+b,0);
// const arrLength=myArray.length;
// const totalAvg=totalCount/arrLength;
// console.log(parseInt(totalAvg))

// const days=['sunday','monday','tuesday','wensday'];
// for(let day of days){
//   day=day.charAt(0).toUpperCase()+day.substring(1);
//   console.log(day)
// }

// const days=['sunday','monday','tuesday','wensday'];
// const day=days.join("_");
// console.log(day)


//check some element of array contain into another array
// let student=[1,2,3,4,5,6,7,8];
// let child_student=[3,4,5,9,10];
// let reesult=student.some(element=>child_student.includes(element));
// console.log(reesult)

//check anagram word
const string_1='Mary';
const string_2='army';
var a=string_1.toLowerCase(); //mary
var b=string_2.toLowerCase() //army
a=a.split("").sort().join("");
//['m','a','r','y'] =>army
b=b.split("").sort().join("");
//['a','r','m',y]=>army
console.log( a===b);

// let child_student=[3,4,5,9,10];
// let newArray=Array.isArray(child_student);
// console.log(newArray)
//slice()=>remove element of array
const myArray=[5,16,187,29,30];
const newArray=myArray.filter(function(ele,arr,index){
  return ele!
})
console.log(newArray)