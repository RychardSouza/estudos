clique = ''
function clicar() {
   let res = document.getElementById('res')
   clique ++
    
   res.innerHTML = `O contador está com ${clique} cliques.`
}

function zerar() {
   res.innerHTML = ''
}