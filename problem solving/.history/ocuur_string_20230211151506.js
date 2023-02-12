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



class Car{
  constructor(name,price,year){
    this.name=name;
    this.price=price;
    this.year=year
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";

