let header = document.querySelector('.header');
let links = document.querySelector('.links');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
    header.classList.toggle('active', window.scrollY > 0);
  
  
})
