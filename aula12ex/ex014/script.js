function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`


    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'imagem/fotoasnha.png'
        document.body.style.background = '#BDACA3'
    
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagem/fototarde.png'
        document.body.style.background = '#E6AC43'
} else{
    //Boa noite
    img.src = 'imagem/fotonoite.png'
    document.body.style.background = '#092626'
}
 }