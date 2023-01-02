/*toggle*/
let toggle = document.querySelector('.toggle-btn');
let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('.close-btn');
toggle.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click', function () {
    sidebar.classList.remove
})