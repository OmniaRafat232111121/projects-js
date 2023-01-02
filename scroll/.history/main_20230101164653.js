let header = document.querySelector('.header');
let links=document.querySelector('')
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
  

})
if ( window.scrollY < 500) {
    header.classList.toggle('active');
}