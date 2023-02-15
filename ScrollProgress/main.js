/*
scroll height
client Height
*/
let el=document.querySelector('.scroller');
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height)


window.addEventListener('scroll',scroller);
function scroller(){
  let scrollTop=document.documentElement.scrollTop;
  console.log(Math.floor(scrollTop));
  el.style.width=`${(scrollTop/height)*100}%`;
  

}