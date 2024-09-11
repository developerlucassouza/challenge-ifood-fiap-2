// AJUSTAR TAMANHO DO MENU/
let menu = document.querySelector('#menu');
if (window.innerWidth >= 768) {
    menu.style.display = 'block';
} else {
    menu.style.display = 'none';
}


// MENU BURGUER
document.querySelector('#menu-icon').addEventListener('click', menuBurguer);
function menuBurguer() {
    let menu = document.querySelector('#menu');
    let main = document.querySelector('main.container');
    // alert('|' + menu.style.display + '|');
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        if (window.innerWidth >= 768) {
            main.style.marginLeft = 'auto';
        }
    } else {
        menu.style.display = 'block';
        if (window.innerWidth >= 768) {
            main.style.marginLeft = '16.7vw';
        }
    }
};