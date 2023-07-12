function enviar() {
    var nomes = document.querySelector('#nome')
    var idade = document.getElementById('idade').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var res = document.getElementById('res')
    var nome = nomes.value;
    var imc = (peso / altura ** 2)
    var total = imc.toFixed(2)
    
/* Peso normal jovem */

    if (total >= 18 && total <= 25 && idade <= 36) {
        res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`
        
        res.innerHTML += `<p>Você ainda é jovem e seu índice de massa corporal (IMC) é ${total}, o que é considerado ideal para sua faixa etária.</p>`
        
        res.innerHTML += `<p>Parabéns por estar dentro do peso adequado! Continue cuidando da sua saúde.</p>`

/* Peso normal idade avançada */

    } else if (total >= 18 && total <= 25 && idade >= 36) {
        res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
        
        res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que ainda é considerado ideal para seu peso.</p>`
        
        res.innerHTML += `<p>Continue adotando hábitos saudáveis para manter seu peso adequado.</p>`
        }
        
/* Muito abaixo do peso, jovem*/

        else if (total < 17 && idade <= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
            
            res.innerHTML += `<p>Você ainda é jovem e seu índice de massa corporal (IMC) é ${total}, que é considerado MUITO ABAIXO do peso.</p>`
            
            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Muito abaixo do peso, idade avançada */

        else if (total < 17 && idade >= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado MUITO ABAIXO do peso.</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }
    
/* Abaixo do peso jovem */        

        else if (total >= 17 && total <= 18.49 && idade <= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você ainda é jovem e seu índice de massa corporal (IMC) é ${total}, que é considerado ABAIXO do peso.</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }
  
/* Abaixo do peso idade avançada */          

        else if (total >= 17 && total <= 18.49 && idade >= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado ABAIXO do peso.</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Acima do peso, jovem */   

        else if (total >= 25 && total <= 29.99 && idade <= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado ACIMA do peso.</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Acima do peso, idade avançada */   

        else if (total >= 25 && total <= 29.99 && idade >= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado ACIMA do peso.</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Obesidade I, jovem */ 

        else if (total >= 30 && total <= 34.99 && idade <= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado OBESIDADE I.</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Obesidade I, idade avançada */ 

        else if (total >= 30 && total <= 34.99 && idade >= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado OBESIDADE I.</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Obesidade II, idade jovem */ 

        else if (total >= 35 && total <= 39.99 && idade <= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado Obesidade II (severa).</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Obesidade II, idade avançada */ 

        else if (total >= 35 && total <= 39.99 && idade >= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado Obesidade II (severa).</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Obesidade III, idade jovem */ 

        else if (total >= 40 && idade <= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado Obesidade III (mórbida).</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

/* Obesidade III, idade avançada */ 

        else if (total >= 40 && idade >= 36) {
            res.innerHTML = `<p>Olá ${nome} sejá bem-vindo ao Teste IMC. Aqui estão seus resultados</p>`   
           
            res.innerHTML += `<p>Você já está entrando em uma faixa etária mais avançada e seu IMC é ${total}, que é considerado Obesidade III (mórbida).</p>`

            res.innerHTML += `<p>É importante adotar hábitos saudáveis, como uma alimentação equilibrada e a prática de exercícios físicos, para alcançar o peso adequado.</p>`
            
            res.innerHTML += `<p>Consulte um profissional da saúde para orientação personalizada.</p>`
        }

        else {

        }

    res.value = '';
    res.focus();
    
}