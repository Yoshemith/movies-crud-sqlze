window.onload = function(){
    let fondo = document.querySelector('body');

    let confirmar = confirm('Desea un fondo de pantalla');
    if(confirmar){
        fondo.classList.add('fondo2');
    }
}