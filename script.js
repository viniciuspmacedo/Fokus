const html = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const startBtn = document.querySelector('#start-pause')
const timer = document.querySelector('#timer')
const titulo = document.querySelector('.app__title')
const banner = document.querySelector('.app__image')
const musicaInput = document.querySelector('#alternar-musica')

const musica = new Audio ('/sons/luna-rise-part-one.mp3')
musica.loop

const duracaoFoco = 1500
const duracaoDescansoCurto = 300
const duracaoDescansoLongo = 900

focoBtn.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

musicaInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    } else{
        musica.pause()
    }
})

const alterarContexto = (contexto) => {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)

    switch (contexto) {
        case 'foco': titulo.innerHTML = `Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break;

        case 'descanso-curto': titulo.innerHTML = `Que tal dar uma respirada?,<br>
        <strong class="app__title-strong">Faça uma pausa curta!.</strong>`

            break

        case 'descanso-longo': titulo.innerHTML = `Hora de voltar à superfície.<br>
        <strong class="app__title-strong">Faça uma pausa longa.</strong>`

            break

        default:
            break
    }

}