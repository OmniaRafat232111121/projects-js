let header = document.querySelector('.header');
let links = document.querySelector('.links');
let toggle = document.querySelector('.nav-toggle');
let closeButton = document.querySelector('.close-btn');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);

    links.classList.toggle('active', window.scrollY > 0);
  
  
})
toggle.addEventListener('click', function () {
    links.classList.toggle('active');
   
})
closeButton.addEventListener('click', function () {
      links.classList.remove('active');
})


console.log(10 + 20); //30
console.log(type); //

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2);