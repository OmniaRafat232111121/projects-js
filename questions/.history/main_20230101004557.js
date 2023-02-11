// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
  const styles=e.currentTarget.value;
  if(styles.contain('increase'))
    value.textContent = count;
  });
});