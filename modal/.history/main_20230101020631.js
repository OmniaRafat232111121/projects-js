/*toggle*/
let navToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
navToggle.addEventListener('click', function () {
    navigation.classList.toggle('active')
})