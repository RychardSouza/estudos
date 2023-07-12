function enviar() {
    var nomes = document.querySelector('#nome')
    var idade = document.getElementById('idade').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var res = document.getElementById('res')
    var nome = nomes.value;
    var imc = (peso / altura ** 2)
    var total = imc.toFixed(2)
    
    if (total >= 25 && total <= 30 && idade <= 36) {
        res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`
        res.innerHTML += `<p>Você ainda é jovem e seu índice de massa corporal (IMC) é ${total}, o que é considerado ideal para sua faixa etária.</p>`
        res.innerHTML += `<p>Parabéns por estar dentro do peso adequado! Continue cuidando da sua saúde.</p>`
        console.log(imc)

        
    } else if (total >= 25 && total <= 30 && idade <= 36) {
        res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
        res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que ainda é considerado ideal para seu peso.</p>`
        res.innerHTML += `<p>Continue adotando hábitos saudáveis para manter seu peso adequado.</p>`
        console.log(imc)
        
        }
        
    else {
        res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`
        res.innerHTML += `<p>Você está acima do peso ideal para sua faixa etária. Seu IMC é ${total}. <br> <br>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
        res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        console.log(imc)
    }

    res.value = '';
    res.focus();
    
}