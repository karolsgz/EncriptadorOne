const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");
var img = document.querySelector(".Muneco");
var botonCopiar = document.querySelector(".BotonCopiar");
botonCopiar.style.visibility = "hidden";
var ningumMensajeEncontrado = document.querySelector(".NingunMensajeEncontrado");
ningumMensajeEncontrado.style.visibility = "visible";
var textoDeseaDesencriptar = document.querySelector(".TextoDeseaDesencriptar");
textoDeseaDesencriptar.style.visibility = "visible";


function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    img.style.visibility = "hidden";
    ningumMensajeEncontrado.style.visibility = "hidden";
    textoDeseaDesencriptar.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
    
}

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    
    for(let i = 0; i< matrizCodigo.length; i++){

        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],
            matrizCodigo[i][1]);
        }
    }
    return stringParaEncriptar;
}

function btnDesencriptar(){
    var textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    img.style.visibility = "hidden";
    ningumMensajeEncontrado.style.visibility = "hidden";
    textoDeseaDesencriptar.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
    

}

function desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]

    for(let i = 0; i< matrizCodigo.length; i++){

        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1]);
        }
    }
    return stringParaDesencriptar;
}


function btnCopiar() {

    var btnMensaje = document.getElementById("input-text-area").value;
    document.getElementById("input-text").value = btnMensaje;
    mensaje.value = "";
    botonCopiar.style.visibility = "hidden";
    img.style.visibility = "visible";
    ningumMensajeEncontrado.style.visibility = "visible";
    textoDeseaDesencriptar.style.visibility = "visible";

}