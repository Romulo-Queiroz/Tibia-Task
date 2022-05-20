let monsterDetails = document.getElementById('monster-details')

function getmonster(name){
  fetch(`https://api.tibiadata.com/v3/creature/${name}`)
  .then(response => response.json())
  .then(data => {
    monsterDetails.innerHTML = `
    <img src="${data.creature.image_url}"/>
    <h5>Nome: ${data.creature.name}</h5>
    <p>Behaviour: ${data.creature.behaviour}</p>
    <h5>Hitpoints: ${data.creature.hitpoints}</h5>
    <p>Description: ${data.creature.description}</p>
    <h5>Weakness: ${data.creature.weakness}</h5>

    ` 
  })
}

let form = document.getElementById('form')

let charName = document.getElementById('txtChar')

form.addEventListener('submit', (e)=> {
  e.preventDefault()
  let nomeMonster = charName.value 
  getmonster(nomeMonster)

})

