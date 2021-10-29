window.onload = function(){
    let subtitulo = document.querySelector('h1');
    let enlace = document.querySelector('a');
    let fondo = document.querySelector('body');

    let nombre = prompt('Ingrese su nombre: ');
    console.log('Nombre ingresado: ', nombre);
    if(nombre==null || nombre == ''){
        subtitulo.innerHTML += ' Invitado';
    }else{
        subtitulo.innerHTML += ' ' + nombre;
    }

    subtitulo.style.textTransform = 'uppercase';
    enlace.style.color = '#E51B3E';

    let confirmar = confirm('Desea un fondo de pantalla');
    if(confirmar){
        fondo.classList.add('fondo');
    }


}