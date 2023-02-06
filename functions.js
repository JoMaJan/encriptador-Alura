

function encriptar(){
    let mensaje = document.getElementById("inputMensaje").value;
    let mensajeEncriptado = mensaje.replace(/a/g,"ai").replace(/e/g,"enter").replace(/i(?=a)/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
    const caja = document.getElementById("cajaTexto");    
    const caja2 = document.getElementById("cajaCodificado");  
    mostrarCaja(mensajeEncriptado, caja, caja2);  

}

function mostrarCaja(textoClave, cajon1, cajon2){   
    
    cajon1.style.display = "none";    
    cajon2.style.animation = "fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both";
    cajon2.style.display = "block";
    document.getElementById("inputMensaje2").value = textoClave;  

}

function desencriptar(){
    let texto = document.getElementById("inputMensaje").value;
    let textoEncriptado = texto.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    const caja = document.getElementById("cajaTexto");
    const caja2 = document.getElementById("cajaCodificado");
    ocultarCaja(textoEncriptado,caja, caja2);
  
}


function ocultarCaja(palabras, parte1, parte2){
    parte2.style.display = "none";
    parte1.style.animation = "fade-in-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both";
    parte1.style.display = "block";
    document.getElementById("inputMensaje").value = palabras;
}