dia = new Date()
dsem = dia.getDay()

/*  0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado */

switch(dsem) {
    case 0: 
        console.log('Hoje é Domingo')
        break
    case 1: 
        console.log('Hoje é Segundo-Feira')
        break
    case 2: 
        console.log('Hoje é Terça-Feira')
        break
    case 3: 
        console.log('Hoje é Quarta-Feira')
        break
    case 4: 
        console.log('Hoje é Quinta-Feira')
        break
    case 5: 
        console.log('Hoje é Sexta-Feira')
        break
    case 6: 
        console.log('Hoje é Sabado')
        break
}