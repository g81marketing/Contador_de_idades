
function verificar() {

    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    let data = new Date()
    let ano = data.getFullYear()


if (fano.value.length == 0 || Number (fano.value) > ano) {

    window.alert('Ano Inválido')
    }   else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        let genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

                if (fsex[0].checked) {

                    genero = 'Masculino'

                    if ( idade >= 0 && idade <= 10){
                    img.setAttribute('src', 'img/foto_bebe_masc.jpeg')
                  

                    } else if ( idade >= 11 && idade <= 21) {
                        img.setAttribute('src', 'img/foto_jovem_masc.jpeg')
                     
                   
                    } else if ( idade >= 22 && idade <= 50) {

                        img.setAttribute('src', 'img/foto_adulto_masc.png')

                      
                    } else if ( idade > 50) {

                        img.setAttribute('src', 'img/foto_idoso_masc.jpeg')
                  
                    }





                } else if (fsex[1].checked ) {

                    genero = 'Feminino'

                    if ( idade >= 0 && idade <= 10){
                        img.setAttribute('src', 'img/foto_bebe_fem.JPEG')
                   
    
                        } else if ( idade >= 11 && idade <= 21) {
                            img.setAttribute('src', 'img/foto_jovem_fem.JPEG')
                         
                       
                        } else if ( idade >= 22 && idade <= 50) {
    
                            img.setAttribute('src', 'img/foto_adulto_fem.JPEG')
    
                            
                        } else if ( idade > 50) {
    
                            img.setAttribute('src', 'img/foto_idoso_fem.jpeg')
                           
                        }
 }

res.innerHTML = `<p> Detectamos uma pessoa do Sexo ${genero} com ${idade} anos de idade </p>`
res.appendChild(img)
}

}



