

const textArea = document.getElementById("textArea");
// textArea.classList.add('textarea-transform');
textArea.addEventListener('keyup', valueInput);

function valueInput(e) {
    e.preventDefault();
    // const regExt = /([A-Z])\s+/ // Letras, numeros, guion y guion_bajo
    let value = e.target.value;
    for (let i = 0; i < value.length; i++) {
       console.log(`${i}: ${value[i]}`);
       value=value.toLowerCase();
    }
    e.target.value=value;
}