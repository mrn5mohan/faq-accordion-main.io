const button =document.querySelectorAll('.js-button');

button.forEach(button =>{
button.addEventListener('click',showAns);
});

function showAns(){
celement=event.target;
const datas = 'ans'+this.getAttribute('data');
var state =document.querySelector(`.${datas}`).style.display ;
if (state == 'block'){
document.querySelector(`.${datas}`).style.display = 'none';
celement.src='assets/images/icon-plus.svg'
}
else{
  document.querySelector(`.${datas}`).style.display = 'block';
   celement.src='assets/images/icon-minus.svg'
}
}
