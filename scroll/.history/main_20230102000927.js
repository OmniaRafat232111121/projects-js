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

var x = 8;
x++;
++x;
console.log(x)


console.log("Osama Mohamed");
console.log(typeof "Osama Mohamed");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof { name: "Osama", age: 17, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);