const form = document.getElementById("formulario")

function eMaior(valora,valorb){
    qualEmaior = false
    if (valorb > valora){
        return qualEmaior = true
    }
    else{
        return qualEmaior = false
    }

}

form.addEventListener('submit', function(e){
    e.preventDefault()
    const campoa = document.getElementById('campoa')
    const campob = document.getElementById('campob')
    const valora = campoa.value
    const valorb = campob.value
    const mensagemSucesso = 'parabens seu formulario foi enviado, pois numero 2 é maior!'
    const mensagemErro = 'infelizmente seu formulario não foi enviado, pois o numero 2 não é maior!'
    if (eMaior(valora,valorb)){
        const containerMS = document.querySelector('.sucess')
        containerMS.innerHTML = mensagemSucesso
        containerMS.style.display = 'block'
        campoa.value = ""
        campob.value = ""
    }
    else{
        const containerMS = document.querySelector('.error')
        containerMS.innerHTML = mensagemErro
        containerMS.style.display = 'block'
        campoa.value = ""
        campob.value = ""
    }


})
