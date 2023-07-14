function clicar() {
   let num = window.prompt('Digite o primeiro número:')
   let num2 = window.prompt('Digite o segundo número:')
   let res = document.getElementById('res')
   let soma = Number(num) + Number(num2)
   

   res.innerHTML = `A soma entre <mark>${num}</mark> e <mark>${num2}</mark> é igual a <strong>${soma}</strong>`
}