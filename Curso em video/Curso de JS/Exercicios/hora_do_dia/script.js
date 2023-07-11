var agora = new Date()
        var hora = agora.getHours()
        var res = document.getElementById('msg')
        var fundo = document.getElementById('body')
        var imgdia = "bom_dia.jpg"
        var imgtarde = "boa_tarde.webp"
        var imgnoite = "boa_noite.jpg"
        var img = document.getElementById('img2')

        if (hora <= 12){
           res.innerHTML = `Agora são ${hora}h. Tenha um bom dia!`
           fundo.style.background = '#FEBD4C'
           img.src = 'bom_dia.png'
          
        } else if (hora <= 18) {
            res.innerHTML = `Agora são ${hora}h. Tenha uma boa tarde!`
            fundo.style.background = 'orange'
            img.src = "boa_tarde.png"
        } else {
            res.innerHTML = `Agora são ${hora}h. Tenha uma boa noite!`
            fundo.style.background = 'grey'
            img.src = "boa_noite.png"

        }