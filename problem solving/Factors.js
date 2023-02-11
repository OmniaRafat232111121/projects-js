//example find the factor number
const number = prompt('Enter a positive number')
console.log(`factors number of ${number}`)
for (let i = 0; i < number; i++) {
  if (number % i == 0) {
    console.log(i)
  }
}
