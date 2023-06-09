function clicar() {
    var p = document.getElementById('pais')
    var valor = p.value;
    var final = valor.toUpperCase()
    var res = document.getElementById('res')
    

    if ( final == 'BRASIL' ) {
        res.innerHTML += `<p>Sim, você é brasileiro</p>`
    }
    else {
        res.innerHTML += `<p>Você é <strong>estrangeiro</strong></p>`
    }
}