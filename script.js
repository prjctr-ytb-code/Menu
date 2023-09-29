const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
            
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})