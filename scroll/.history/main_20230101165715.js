let header = document.querySelector('.header');
let links = document.querySelector('.links');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
  

})
if ( window.scrollX > 0) {
  links.classList.toggle('active li a')
}