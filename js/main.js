let interruptor=true;

let casillas = Array.from(document.getElementsByClassName("caja"))
    casillas.map((casilla, /*index*/)=>{
        casilla.addEventListener ("click", ()=>{
            if (casilla.innerHTML == "") {
                casilla.innerHTML = (interruptor) ? "X" : "O"
                interruptor = !interruptor;
            };
        });
    });