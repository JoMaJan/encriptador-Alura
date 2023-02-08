
window.onload = function(){
    document.getElementById("inputMensaje").focus();
}


/* function para encriptar el mensaje al presionar el boton encriptar*/

document.getElementById('botonEncriptar').addEventListener('click', function() {
    let mensaje = document.getElementById("inputMensaje").value;
    let mensajeEncriptado = mensaje.replace(/a/g,"ai").replace(/e/g,"enter").replace(/(?<!a)i/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
    let caja = document.getElementById("cajaTexto");
 
    caja.style.animation = "fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both"; 
    document.getElementById("inputMensaje").value = mensajeEncriptado; 
    validar(mensaje);
});

/* function para desencriptar el mensaje al presionar el boton desencriptar*/

document.getElementById('botonDesencriptar').addEventListener('click', function() {
    let texto = document.getElementById("inputMensaje").value;
    let textoEncriptado = texto.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    let caja = document.getElementById("cajaTexto");

    caja.style.animation = "fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both";
    document.getElementById("inputMensaje").value = textoEncriptado;
    validar(textoEncriptado);
});

/* function para guardar el texto en el portapapeles al hacer click en su icono*/


document.getElementById('botonCopiar').addEventListener('click', function() {
        textoCopiar = document.getElementById("inputMensaje").value;
        navigator.clipboard.writeText(textoCopiar);
})

/* function para refrescar la caja texto */

document.getElementById('botonLimpiar').addEventListener('click', function() {
        document.getElementById("inputMensaje").value = "";
        document.getElementById("inputMensaje").focus();

})


/* function para validar que no haya mayusculas*/

function validar(x){
    for(var i=0;i<x.length;i++){
        var letraActual = x.charAt(i);
        var mayuscula = /[A-Z]/g;;
        var validacion = x.match(mayuscula);
        if( letraActual == validacion){
            alert("Ingresó una letra mayúscula, recuerde usar solo letras minúsculas.");
            location.reload();
            break;
        }        
    }
}

