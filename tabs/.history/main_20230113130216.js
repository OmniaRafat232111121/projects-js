const about = document.querySelector(".right-content");
const btnsTab = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    btnsTab.forEach(function (btn) {
        //remove active from other Button 
        btn.classList.remove('active');
        e.target.classList.add('active')
      
    });
    //hide other articles
       articles.forEach(function (article) {
        article.classList.remove('active')
        
    })
    

});
