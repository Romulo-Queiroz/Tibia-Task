let showinfo = document.getElementById('players-details')

function getplayer(name){
  fetch(`https://api.tibiadata.com/v3/character/${name}`)
  .then(response=> response.json())
  .then(data => {
    showinfo.innerHTML `
    <h5>Nome: ${data.characters.character.name}</h5>
    `
    let dados = data['characters'] +['character']
    
   
 })

}

 let form = document.getElementById('form')

 let playername = document.getElementById('txtChar')




 form.addEventListener('submit', (e)=> {
   e.preventDefault()
  //  let nomeMonster = charName.value 
   getmonster(nomeMonster)

})
// console.log(nomeplayer)


// Tentativa de update || Código antigo não funciona||