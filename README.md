# Es: Javascript Password Generator Wannabe

I deployed 3 different versions + 1 bonus version:
- V1:
  - everything is printed in the html page by `writeln()` function, inside which (using **template literal**) by call of `prompt()` i got data from the user. 
  - ```
    document.writeln(
        `
            <h1>
                <em>${prompt('Inserisci il tuo nome:', 'Federico')}${prompt('Inserisci il tuo cognome:', 'Casu')}${prompt('Inserisci il tuo colore preferito:', 'Giallo')}23</em>
            </h1>
        `
    );
    ```
- V2:
  - Here I've done same things but using `+` symbol to string concatenation rather than using template literal.
  - ```
    document.writeln("<h1><em>" + prompt('Inserisci il tuo nome:', 'Federico') + prompt('Inserisci il tuo cognome:', 'Casu') + prompt('Inserisci il tuo colore preferito:', 'Giallo') + 23 + "</em></h1>");
    ```
- V3:
  - This is the simplest version:
    - Declaration and initialization of variables by `prompt()` function, then printing them in the html page by `writeln()` function and `+` symbol for their concatenation.
  - ```
    let nome = prompt('Inserisci il tuo nome:', 'Federico');
    let cognome = prompt('Inserisci il tuo cognome:', 'Casu');
    let colorePreferito = prompt('Inserisci il tuo colore preferito:', 'Giallo');
    const finalNumber = 23;

    document.writeln('<h1><em>' + nome + cognome + colorePreferito + finalNumber + "</em></h1>");
    ```
- V_BONUS:
  - Here I got data from user through an html form. With `addEventListener()` function I got all data that user submitted by the html form, then I handled them by storing them in variables and printing them in html page.
  - ```
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
    ```