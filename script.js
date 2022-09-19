window.addEventListener('DOMContentLoaded', (name) => {

let monsterDetails = document.getElementById('players-details')

function getplayer(name){
  fetch(`https://api.tibiadata.com/v3/character/${name}`)
  .then(response => response.json())
  .then(data => {
    playersDetails.innerHTML = `
    <p>Name: ${data.characters.character.name}</p>
    ` 
  })
}

let form = document.getElementById('form')

let nome = document.getElementById('txtChar')

form.addEventListener('submit', (e)=> {
  e.preventDefault()
  let nomePlayer = nome.value 
  getmonster(nome)

})
  
});