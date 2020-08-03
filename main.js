
let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let on_off = true;

btnMenu.addEventListener('click', () => {
    if(on_off) {
       menu.style.left = 0%;
       menu.style.tramsition = "0.5s";

       on_off = false;
    }
});