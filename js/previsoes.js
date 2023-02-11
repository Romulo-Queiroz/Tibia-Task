let world = 'Antica';

function padrao() {
  setTimeout(() => {
    loader();
    innerBoss();
  }, 1000);
}

let input = document.querySelector('#input');
let button = document.getElementById('btn');
button.addEventListener('click', (e) => {
  e.preventDefault();
  world = input.value;
  loader();
  innerBoss();
  let tBody = document.querySelector('#tBody');
  tBody.style.display = 'none';

  setTimeout(() => {
    tBody.style.display = 'table-row-group';
    let loader = document.querySelector('.loader');
    loader.remove();
  }, 4000);
  mundoAtual(world);
});

async function getBoss(type) {
  const { data } = await axios.get(
    `https://api.simacheck.com/server/lore/${world}`
  );
  return data[type];
}


function mundoAtual(world) {
  let previsao = document.querySelector('#divWorld');
  let p = document.createElement('p');
  return (previsao.innerHTML = `<p>Mundo: <strong class='world'>${world}</strong></p>`);
  //
}


function drawBossIten({ current_prob, image_url, boss, last_view }) {
  const color = current_prob === 0 ? 'red' : 'green';
  const lastView = moment(last_view, 'YYYY-MM-DD').from(
    moment().startOf('day')
  );
  const porcentage = (current_prob * 100).toFixed(2);
  return `
     <tr id="details-table">
        <td class="${color}" title="Quando a cor estiver vermelho a probabilidade é baixa. Com a probailidade alta fica verde">
        <img src="${image_url}" alt="Draptor"></td>
        <td>${boss}</td>
        <td>${porcentage}%</td>
        <td>${lastView}</td>
    </tr>`;
}

function loader() {
  const previsao = document.querySelector('#previsao');
  const p = document.createElement('p');
  p.innerText = '';
  p.className = 'loader';
  previsao.appendChild(p);
  return p;
}

function removeloader() {
  const loader = document.querySelector('.loader');
  loader.remove();
}

async function innerBoss() {
  const tBody = document.querySelector('#tBody');
  let tableContent = '';
  tableContent += 'Loyal Partners';
  const loyalPartners = await getBoss('Loyal Partners');
  loyalPartners.forEach((loyalBoss) => {
    tableContent += drawBossIten(loyalBoss);
  });

  tableContent += 'Vampire Lords';
  const vampireLords = await getBoss('Vampire Lords');
  vampireLords.forEach((vampireBoss) => {
    tableContent += drawBossIten(vampireBoss);
  });
  tableContent += 'Rookgaard';
  const bossRookgaard = await getBoss('Rookgaard');
  bossRookgaard.forEach((rookgaardBoss) => {
    tableContent += drawBossIten(rookgaardBoss);
  });

  tBody.innerHTML = tableContent;
  removeloader();
}

padrao();

