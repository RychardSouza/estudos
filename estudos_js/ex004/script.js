function clicar() {
   let nome = window.prompt('Digite seu nome:')
   let res = document.getElementById('res')

   res.innerHTML = `Olá, ${nome}! É um grande prazer te conhecer! 🖖`
}