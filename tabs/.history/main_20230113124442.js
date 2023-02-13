const about = document.querySelector(".about-content");
const btnsTab = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btnsTab.forEach(function (btn) {
            btn.classList.remove('active');
            
        })
    }
    e.target.classList.add('active');

});