const about = document.querySelector(".right-content");
const btnsTab = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    btnsTab.forEach(function (btn) {
        //remove active 
        btn.classList.remove('active');
      
  })

});
