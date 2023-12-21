// document.writeln(
//     `
//     <h1>
//     <em>${prompt('Inserisci il tuo nome:', 'Federico')}${prompt('Inserisci il tuo cognome:', 'Casu')}${prompt('Inserisci il tuo colore preferito:', 'Giallo')}23</em>
//     </h1>
//     `
// );

// alternative version 1
// document.writeln("<h1><em>" + prompt('Inserisci il tuo nome:', 'Federico') + prompt('Inserisci il tuo cognome:', 'Casu') + prompt('Inserisci il tuo colore preferito:', 'Giallo') + 23 + "</em></h1>");


// alternative version 2
/*
let nome = prompt('Inserisci il tuo nome:', 'Federico');
let cognome = prompt('Inserisci il tuo cognome:', 'Casu');
let colorePreferito = prompt('Inserisci il tuo colore preferito:', 'Giallo');
const finalNumber = 23;

document.writeln('<h1><em>' + nome + cognome + colorePreferito + finalNumber + "</em></h1>");
*/

/* --------------------
    BONUS VERSION
--------------------- */

let formData = document.getElementById("passwordGeneratorForm");

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = document.getElementById("name");
    let cognome = document.getElementById("surname");
    let colorePreferito = document.getElementById("favColor");

    document.writeln(
        `
        La password generata è: ${nome.value}${cognome.value}${colorePreferito.value}23
        `
    );
});

