let people=[
  {name:'omnia',age:32,job:'Developer'},
  {name:'omnia',age:92,job:'Developer'},
  {name:'omnia',age:42,job:' Back Developer'},
  {name:'omnia',age:12,job:' front Developer'},
  {name:'a',age:12,job:' front Developer'},
  {name:'omnia',age:12,job:' front Developer'}, 
   {name:'omnia',age:12,job:' front Developer'},

]


//filter method
//return a new array=>based on condition
const newArray=people.filter(person=>person.name==='john');
console.log(newArray)
//Map Method
//call function on each item and return a new array
// const myArray=people.map(person=>({
//   name:person.name,
//   age: person.age,
//   birth:2023-person.age
// }))
// console.log(myArray)