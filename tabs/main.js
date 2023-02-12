<<<<<<< HEAD
const about = document.querySelector(".right-content");
const btnsTab = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btnsTab.forEach(function (btn) {
        //remove active from other Button 
        btn.classList.remove('active');
        e.target.classList.add('active')
      
    });
    //hide other articles
       articles.forEach(function (article) {
        article.classList.remove('active')
        
    })
    const element = document.getElementById(id);
    element.classList.add("active");

    }
});
=======
const about = document.querySelector(".right-content");
const btnsTab = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btnsTab.forEach(function (btn) {
        //remove active from other Button 
        btn.classList.remove('active');
        e.target.classList.add('active')
      
    });
    //hide other articles
       articles.forEach(function (article) {
        article.classList.remove('active')
        
    })
    const element = document.getElementById(id);
    element.classList.add("active");

    }
});
>>>>>>> d8386487acc694cdd3ca41752ffa54818bb79d81
