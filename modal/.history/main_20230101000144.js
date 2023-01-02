//set count 0
const value=document.getElementById('value');
const btns=document.querySelector('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles= e.currentTarget.classList;
        if(styles.contain('decrease')){
            count--;
        }
        value.textContent = count;
    })
})