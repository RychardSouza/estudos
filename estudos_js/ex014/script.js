function calcular() {
   let num = Number(window.prompt('Digite um número: '))
   let num2 = Number(window.prompt('Digite outro número: '))
   let res = document.getElementById('res')
  
   if (num > num2) {
      res.innerHTML = `Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num}</strong>`
   }  else if (num < num2) {
      res.innerHTML = `Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num2}</strong>`
   } else if (num == num2) {
      res.innerHTML = `Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, ambos são <strong>IGUAIS</strong>`
   } else {
      window.alert("{ERRO} DIGITE APENAS NÚMEROS!")
   }

  

}