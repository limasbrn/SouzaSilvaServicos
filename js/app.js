let hamburguer = document.getElementById('hamb-icon');
let menu = document.getElementsByClassName('hamb-nav');

function mostrarMenu(){
    menu.classList.toggle('active');
}

hamburguer.addEventListener('click', mostrarMenu);
