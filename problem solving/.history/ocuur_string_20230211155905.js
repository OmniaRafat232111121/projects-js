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


