var vetores = [5, 1, 8 ,9, 2, 4]

/* Forma mais longa 

for (var pos =0; pos < vetores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}
*/
/* Forma mais simples */
for (let pos in vetores) {
    console.log(`A posição ${pos} tem o valor ${vetores[pos]}`)
}