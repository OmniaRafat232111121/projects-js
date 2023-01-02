let header = document.querySelector('.header');
let links = document.querySelector('.links');
let toggle=
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
    links.classList.toggle('active', window.scrollY > 0);
  
  
})
