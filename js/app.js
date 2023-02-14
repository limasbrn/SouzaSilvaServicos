let hamburguer = document.getElementById('hamb-icon');
let menu = document.getElementById('hamb-nav');
let lista = document.getElementById('lista-humb');

function mostrarMenu(){
    menu.classList.toggle('active');
    console.log('Clicou')
}
function escondeMenu(){
    menu.classList.remove('active');
    console.log('Clicasse')
}

hamburguer.addEventListener('click', mostrarMenu);
lista.addEventListener('click', escondeMenu);
