const inputTarefa = document.getElementById('textoTarefa')
const botao = document.getElementById('addTarefa')
const main = document.querySelector('main')


botao.addEventListener('click', (event) => {
    let nomeTarefa = inputTarefa.value

    if(nomeTarefa.length <= 0){
        alert('Você deve digitar uma tarefa primeiro')
        return
    }
    console.log(event)
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
    cardDiv.innerHTML += `
    <div class="card-body">
        <p>${nomeTarefa}</p>
        <button class="btn btn-success">Finalizar Tarefa</button>
    </div>`
    main.appendChild(cardDiv)
    const btnFinalizar = cardDiv.children[0].children[1]
    btnFinalizar.onclick = (event) => {
        // const cardAvo = event.target.parentNode.parentNode
        // cardAvo.remove()
        // console.log(event.target)
        cardDiv.remove()
    }
    //addEventFinalizarTarefa()
    inputTarefa.value = ""

})

function addEventFinalizarTarefa(){
    const listaDeBotoes = document.querySelectorAll('.btn-success')

    listaDeBotoes.forEach(botao => {
        botao.onclick = (event) =>{
            const cardAvo = event.target.parentNode.parentNode
            cardAvo.remove()
            console.log(event.target)
        }
    })
}

//DESAFIO colocar a tecla enter pra gerar a tarefa
window.addEventListener('keypress', (ev) => {
    if(ev.key === "Enter"){
        
    }
})

