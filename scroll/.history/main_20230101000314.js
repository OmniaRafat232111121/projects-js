const count=0;
//set count 0
const value=document.getElementById('value');
const btns=document.querySelector('.btn');

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }


    value.textContent = count;
  });
});