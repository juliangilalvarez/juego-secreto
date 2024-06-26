let numeroSecreto;
let intentos;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto); 

function asignarTextoElemento(elemento, texto) {
    let  elementoHTML  = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function vericarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
     console.log(intentos); 
     if (numeroDeUsuario === numeroSecreto) {
    
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es mayor!'); 
        } else {
            asignarTextoElemento('p','El numero secreto es menor!');
        }
        intentos++;
        limpiarCaja() 
     }

     return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function generaNumeroSecreto() {
//  let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return Math.floor(Math.random()*10)+1;
     let numeroGenerado =  Math.floor(Math.random()*10)+1;
     console.log(numeroGenerado);
     console.log(listaNumeroSorteados)

     if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Acabastes con el numero de intentos');
     } else {  

    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generaNumeroSecreto();
    } else {
           listaNumeroSorteados.push(numeroGenerado);
           return numeroGenerado;
            }
        }



}

function condionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Ingresa un numero entre el 1 y ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos =1;
}



function reiniciarJuego() {
    //limpiar la caja  
    limpiarCaja();

    //indicar mesaje de inicio 
      // inciarlizar el  numero de intentos  
    // Generar el numero aleatorio 
    condionesIniciales();

    // desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    
    
}

condionesIniciales();

