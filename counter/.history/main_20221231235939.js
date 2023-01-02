//set count 0
const value=document.getElementById('value');
const btns=document.querySelector('.btn');

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if(styles.contain('decrease')){
        count--;
    }
    else if (styles.contain('increase')){
     count++;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
})
