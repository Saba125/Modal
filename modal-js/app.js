const modalBtn = document.querySelector('.modal')
const modal = document.querySelector('.cont')
const closeBtn = document.querySelector('.close-btn')
console.log(closeBtn);

modalBtn.addEventListener("click", function(){
    modal.classList.add('open-modal')
})
closeBtn.addEventListener('click', function(){
    modal.classList.remove('open-modal')
})