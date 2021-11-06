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

    let logo = document.querySelector("figure img");
    let menu = document.querySelector("#menu");
    logo.addEventListener("click", (e)=>{
        menu.classList.toggle("mostrar");
    });
    logo.addEventListener("mouseout", (e)=>{
        menu.classList.remove("mostrar");
    });

}