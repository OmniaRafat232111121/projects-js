/*toggle*/
let modelBtn = document.querySelector('.model-btn');
let closeBtn = document.querySelector('.close-btn');
let model = document.querySelector('.model-overlay');

modelBtn.addEventListener("click", function () {
    console.log('model');
     model.classList.add("open-model");
});
closeBtn.addEventListener('click')