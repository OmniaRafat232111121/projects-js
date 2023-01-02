let header = document.querySelector('.header');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
    header.classList.toggle('active');

})
if(window)