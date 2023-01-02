let header = document.querySelector('.header');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
  

})
if ( window.scrollY < 500) {
    header.classList.remove('active');
}