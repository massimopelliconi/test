var count = 0,
    counter = setInterval(function () {
        document.getElementById("box").innerHTML = count++;
        if (count == 11) {
            clearInterval(counter);
        }
    }, 1000)

var nome;
function scriviNome() {
    nome = prompt("inserisci qui il nuovo titolo", "Cambia titolo");
    document.getElementById("title").innerHTML = nome;
}