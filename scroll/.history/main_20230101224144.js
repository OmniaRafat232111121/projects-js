let header = document.querySelector('.header');
let links = document.querySelector('.links');
let toggle = document.querySelector('.nav-toggle');
let closeButton = document.querySelector('.close-btn');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
    header.classList.remove
    links.classList.toggle('active', window.scrollY > 0);
  
  
})
toggle.addEventListener('click', function () {
    links.classList.toggle('active');
   
})
closeButton.addEventListener('click', function () {
      links.classList.remove('active');
})
