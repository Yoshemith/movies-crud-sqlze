let body = document.querySelector('body');
let logo = document.querySelector("figure img");

logo.addEventListener("mouseover", (e)=>{
    body.classList.toggle('fondoMoviesList');
    let tieneFondo = body.classList.contains('fondoMoviesList');
    if(tieneFondo){
        body.style.backgroundColor = '#7f7f7f'
    }else{
        body.style.backgroundColor = 'white'
    }
});