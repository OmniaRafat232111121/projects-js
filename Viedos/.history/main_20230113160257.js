

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader')
})



const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(1, 3));

const courses=[ "HTML", "CSS", "JavaScript"]
console.log(typeof courses)