function clicar() {
   let num = window.prompt(`Digite um número:`)
   let res = document.getElementById('res')
   let valor = Number(num)   

   res.innerHTML = `O número a ser analisado aqui será o ${valor} <br> <hr>`
   
   res.innerHTML += `O seu valor absoluto é ${Math.abs(valor)}<br> <br>`
   res.innerHTML += `A sua parte inteira é ${Math.trunc(valor)}<br> <br>`
   res.innerHTML += `O valor inteiro mais próximo é ${Math.round(valor)}<br> <br>`
   res.innerHTML += `A sua raiz quadrada é ${Math.sqrt(valor)}<br> <br>`
   res.innerHTML += `A sua raiz cúbica é ${Math.cbrt(valor)}<br> <br>`
   res.innerHTML += `O valor de ${valor}<sup2></sup2> é ${Math.pow(valor, 2)}<br> <br>`
   res.innerHTML += `O valor de ${valor}<sup2></sup2> é ${Math.pow(valor, 3)}<br> <br>`
}