const questions = document.querySelectorAll('.question');
questions.forEach(function (question) {
    //console.log(question);
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function () {
        question.classList.toggle('show-text');
    })
})

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//    console.log(question)
//     question.classList.toggle("show-text");
//   });
// });


const title=document.querySelector