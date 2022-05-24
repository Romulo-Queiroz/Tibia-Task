// Primeiro demonstrar na td com id "Draptor-chance" a probabilidade de aparição.

// Segundo criar uma função para alterar background da imagem -> sendo -> verde com chance vermelho sem.
// requisição aqui : https://api.simacheck.com/server/lore/Ombra

window.addEventListener('DOMContentLoaded',() => getmonsters())

async function getmonsters() {
    const {data} = await axios.get('https://api.simacheck.com/server/lore/Ombra')
    const loyal_panters = data['Loyal Partners']
    const Midnight = loyal_panters[2]
    console.log(Midnight)
    const draptorchance = document.getElementById('Draptor-chance')
    draptorchance.innerText = `${Midnight.current_prob *100}%`

    const draptor_last_view = document.getElementById('Draptor-Last-view')
    draptor_last_view.innerText = moment(Midnight.last_view,'YYYY-MM-DD').from(moment().startOf('day'))
   
}