function clicar() {
   let nome = window.prompt('Qual é o nome do aluno?')
   let nota = window.prompt(`Qual foi a primeira nota de ${nome}?`)
   let nota2 = window.prompt(`Além de 2, qual foi a outra nota de ${nome}?`)
   let res = document.getElementById('res')
   let soma = Number(nota) + Number(nota2)
   let div = soma / 2 
   

   res.innerHTML = `Calculando a média final de ${nome} <br> <br>`
   res.innerHTML += `As notas obtidas foram ${nota} e ${nota2} <br> <br>`
   res.innerHTML += `A média final será ${div}`
}