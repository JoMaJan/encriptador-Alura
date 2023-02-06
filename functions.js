
var texto = "";
 
    

function encriptar(){
    texto = document.getElementById("inputMensaje").value;
    var texto2 = texto.replace(/a/g,"ai").replace(/e/g,"enter").replace(/i(?=a)/g,"imes").replace(/o/g,"ober").replace(/u/g,"ufat");
    console.log(texto2);

    document.getElementById("cajaImagen").innerHTML=
        texto2;
    document.getElementById("cajaImagen").style.border = 
    ("2px solid black")

}

function desencriptar(){
    texto = document.getElementById("inputMensaje").value;
    var textoEncriptado = texto.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    console.log(textoEncriptado);
}



