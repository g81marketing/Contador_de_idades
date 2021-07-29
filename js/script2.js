function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[Erro] Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada: ${idade} anos`
       var genero = ''
       var img = document.createElement('img')
      img.setAttribute('id','foto')
      if (fsex[0].checked) {
          genero = 'Homem'
          if (idade >=0 && idade < 10){
              //criança
              img.setAttribute('src', 'img/foto_bebe_masc.jpeg')

          } else if (idade >= 10 && idade < 21){
              //jovem
              img.setAttribute('src', 'img/foto_jovem_masc.jpeg')
              
          }else if (idade < 50){
             //adulto
             img.setAttribute('src', 'img/foto_adulto_masc.png')
          }else{
              //idoso
              img.setAttribute('src', 'img/foto_idoso_masc.jpeg')
          }
     
      } else if (fsex[1].checked){
          genero = 'mulher'
          if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'img/foto_bebe_fem.JPEG')

        } else if (idade >= 10 && idade < 21){
            //jovem
            img.setAttribute('src', 'img/foto_jovem_fem.JPEG')
            
        }else if (idade < 50){
           //adulto
           img.setAttribute('src', 'img/foto_adulto_fem.JPEG')
        }else{
            //idoso
            img.setAttribute('src', 'img/foto_idoso_fem.jpeg')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
      
    }

}
