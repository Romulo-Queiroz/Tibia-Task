let showinfo = document.getElementById('players-details')

function getplayer(name){
  fetch(`https://api.tibiadata.com/v3/character/${name}`)
  .then(response=> response.json())
  .then(data => {
    showinfo.innerHTML `
    <h5>Nome: ${data.characters.character.name}</h5>
    `
 })
}

let form = document.getElementById('form')

let playername = document.getElementById('txtChar')

form.addEventListener('submit', (e)=> {
  e.preventDefault()
  let playersnome = playername.value.getplayer(playersnome)

})

// Tentativa de update || Código antigo não funciona||