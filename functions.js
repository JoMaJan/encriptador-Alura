
document.getElementById('botonEncriptar').addEventListener('click', function() {
    let mensaje = document.getElementById("inputMensaje").value;
    let mensajeEncriptado = mensaje.replace(/a/g,"ai").replace(/e/g,"enter").replace(/i(?=a)/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
    let caja = document.getElementById("cajaTexto");
 
    caja.style.animation = "fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both"; 
    document.getElementById("inputMensaje").value = mensajeEncriptado;  
});


document.getElementById('botonDesencriptar').addEventListener('click', function() {
    let texto = document.getElementById("inputMensaje").value;
    let textoEncriptado = texto.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    let caja = document.getElementById("cajaTexto");

    caja.style.animation = "fade-in-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both";
    document.getElementById("inputMensaje").value = textoEncriptado;
});


document.getElementById('botonCopiar').addEventListener('click', function() {
        textoCopiar = document.getElementById("inputMensaje").value;
        navigator.clipboard.writeText(textoCopiar);
})








