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



onsole.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));