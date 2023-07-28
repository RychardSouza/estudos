function calcular() {
   let num = Number(window.prompt('Qual o número? '))
   let res = document.getElementById('res')
   let tipo 
  
   if (num % 2 == 0) {
      tipo = '<strong>PAR</strong>'
   } else {
      tipo = '<strong>ÍMPAR</strong>'
   }

   res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`

}