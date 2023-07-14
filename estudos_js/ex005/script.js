window.alert('Olá, sejá bem-vindo ao meu site')

function clicar() {
   let num = window.prompt('Digite um número:')
   let res = document.getElementById('res')
   let dobro = num * 2
   let metade = num / 2

   res.innerHTML = `O dobro de ${num} é ${dobro} e a metade é ${metade}!🖖`
}