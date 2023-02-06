


function encriptar(){
    let mensaje = document.getElementById("inputMensaje").value;
    let mensajeEncriptado = mensaje.replace(/a/g,"ai").replace(/e/g,"enter").replace(/i(?=a)/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
    console.log(mensajeEncriptado);  
    mostrarCaja(mensajeEncriptado);

}

function mostrarCaja(textoClave){
    let caja = document.getElementById("cajaTexto");
    /*caja.style.animation = "fade-out-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both";*/
    caja.style.display = "none";
    
    let caja2 = document.getElementById("cajaCodificado");
    caja2.style.animation = "fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both";
    caja2.style.display = "block";
    document.getElementById("inputMensaje2").value = textoClave;

}

function desencriptar(){
    texto = document.getElementById("inputMensaje").value;
    var textoEncriptado = texto.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    console.log(textoEncriptado);
    
}





