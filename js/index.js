
let copiaTextArea = document.getElementById('copia-text-area')
let copiaTextAreaValue = document.getElementById('copia-textarea')
let copiarParrafo1 = document.getElementById('copiar-parrafo1');
let copiarParrafo2 = document.getElementById('copiar-parrafo2');
let buttonCopiar = document.getElementById('button-copiar');
let muneco = document.getElementById('muneco');


let buttonEncriptar = document.getElementById('button-encriptar');
let buttonDesencriptar = document.getElementById('button-desencriptar');
let encriptarTextarea = document.getElementById('encriptar-textarea');

function encriptar() {
    if (encriptarTextarea.value.length === 0) {
        alert("Inserta un valor.");
        return null;
    }
    let text = encriptarTextarea.value;
    if (text.includes('a') || text.includes('e') || text.includes('i') || text.includes('o') || text.includes('u')) {
        copiaTextArea.style.display = "block"
        copiaTextAreaValue.style.display = "block"
        buttonCopiar.style.display = "block";
        copiarParrafo1.style.display = "none";
        copiarParrafo2.style.display = "none";
        muneco.style.display = "none";

        let textoConvertido = "";
        for (let index = 0; index < text.length; index++) {
            switch (text[index]) {
                case 'a':
                    textoConvertido = textoConvertido + "ai"
                    break;
                case 'e':
                    textoConvertido = textoConvertido + "enter"
                    break;
                case 'i':
                    textoConvertido = textoConvertido + "imes"
                    break;
                case 'o':
                    textoConvertido = textoConvertido + "ober"
                    break;
                case 'u':
                    textoConvertido = textoConvertido + "ufat"
                    break;
                default:
                    textoConvertido = textoConvertido + text[index]
                    break;
            }
        }
        copiaTextAreaValue.value = textoConvertido;
    } else {
        alert("No existe ninguna vocal.");
        copiaTextAreaValue.value = "";
        copiaTextArea.style.display = "none"
        copiaTextAreaValue.style.display = "none"
        buttonCopiar.style.display = "none";
        copiarParrafo1.style.display = "block";
        copiarParrafo2.style.display = "block";
        muneco.style.display = "block";
        return null;
    }
}

function desencriptar() {
    let text = copiaTextAreaValue.value;
    if (text.includes('ai')) {
        text = text.replaceAll('ai', 'a');
    }
    if (text.includes('enter')) {
        text = text.replaceAll('enter', 'e');
    }
    if (text.includes('imes')) {
        text = text.replaceAll('imes', 'i');
    }

    if (text.includes('ober')) {
        text = text.replaceAll('ober', 'o');
    }

    if (text.includes('ufat')) {
        text = text.replaceAll('ufat', 'u');
    }

    encriptarTextarea.value = text;
    copiaTextAreaValue.value = text;
}


function copyEncriptar() {
    copiaTextAreaValue.select();
    copiaTextAreaValue.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copiaTextAreaValue.value);
    encriptarTextarea.value = copiaTextAreaValue.value;
    alert("Texto copiado: " + copiaTextAreaValue.value);
}
