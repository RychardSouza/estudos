function calcular() {
   let res = document.getElementById('res');
   let nas = Number(window.prompt('Em que ano você nasceu?'))
   let agora = new Date;
   let ano = agora.getFullYear();
   let resultado = ano - nas
  
   res.innerHTML = `<p>Quem nasceu em ${nas} vai completar <strong>${resultado}</strong> em ${ano}</p>`
  

}