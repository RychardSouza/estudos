 function calcular() {
   const nome = window.prompt('Qual é o nome do aluno?');
   const nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
   const nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ?`));

   const med = (nota1 + nota2)/2
   let res = document.getElementById('res')
   let msg 
   
   if (med >= 6) {
      msg = 'Meus parabéns!'
   } else {
      msg = 'Estude um pouco mais!'
   }

   res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark> </p>`
   res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}<mark> e <mark>${nota2}</mark></p>`
   res.innerHTML += `<p>A média final será <mark>${med}</mark></p>`
   res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}