let titulo = document.querySelector('.titulo')

titulo.addEventListener("mouseover", (e)=>{
    titulo.style.color = "blue"; //prompt("¿Que color quieres?");
});
titulo.addEventListener("mouseout", (e)=>{
    titulo.style.color = "black";
});

let inputTitulo = document.getElementById("title");;
    let estado = 0;
    inputTitulo.addEventListener("keypress", (e)=>{
        estado === 0 && e.key==="s" ? estado++ : estado == 0 ;
        estado === 1 && e.key==="e" ? estado++ : estado == 0 ;
        estado === 2 && e.key==="c" ? estado++ : estado == 0 ;
        estado === 3 && e.key==="r" ? estado++ : estado == 0 ;
        estado === 4 && e.key==="e" ? estado++ : estado == 0 ;
        estado === 5 && e.key==="t" ? estado++ : estado == 0 ;
        if(estado === 6 && e.key==="o"){
            alert("ESTADO SECRETO");
            estado == 0;
        }else{
            estado == 0;
        }
        console.log(estado);
    });