function clique() {
    var idade = document.getElementById('idade')
    var i = idade.value;
    var resultado = document.getElementById('res')

    if (i < 16) {
        resultado.innerHTML = `Você tem ${i} anos. Não pode votar`
    }
    else if (i < 18 || i > 65) {
          resultado.innerHTML = `Você tem ${i} anos. Pode votar, mas não é obrigatorio`
        }
    else {
        resultado.innerHTML = `Você é obrigado a votar`
    }
}