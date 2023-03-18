let monsterDetails: HTMLElement | null = document.getElementById('monster-details');


function getmonster(name: string) {
  fetch(`https://api.tibiadata.com/v3/creature/${name}`)
    .then((response) => response.json())
    .then((data) => {
      if (monsterDetails) {
        monsterDetails.innerHTML = `
          <img src="${data.creature.image_url}"/>
          <h5>Nome: ${data.creature.name}</h5>
          <p>Behaviour: ${data.creature.behaviour}</p>
          <h5>Hitpoints: ${data.creature.hitpoints}</h5>
          <p>Description: ${data.creature.description}</p>
          <h5>Weakness: ${data.creature.weakness}</h5>
        `;
        console.log("funcão getmonster executada com sucesso");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

let submitButton = document.getElementById('btn') as HTMLButtonElement | null;

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("botão clicado");
  let monsterName = (document.getElementById('txtChar') as HTMLInputElement).value;
  getmonster(monsterName);
}
);