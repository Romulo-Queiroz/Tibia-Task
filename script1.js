let monsterDetails = document.getElementById('monster-details')

function getmonster(name){
  fetch(`https://api.tibiadata.com/v3/creature/${name}`)
  .then(response => response.json())
  .then(data => {
    monsterDetails.innerHTML = `
    <img src="${data.creature.image_url}"/>
    <h5>Nome: ${data.creature.name}</h5>
    <p>Description: ${data.creature.description}</p>
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

