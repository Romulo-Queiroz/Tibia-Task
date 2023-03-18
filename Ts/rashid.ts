const localRashid: string[] = [
  'Carlin', // 0
  'Svargrond', // 1
  'Liberty Bay', // 2
  'Port Hope', // 3
  'Ankrahmun', // 4
  'Darashia', // 5
  'Edron' // 6
];

const imgRashid: string[] = [
  '../img/carlinmap.png', // 0
  '../img/svarmap.png', // 1
  '../img/phmap.png', // 3
  '../img/ankmap.png', // 4
  '../img/daramap.png', // 5
  '../img/edronmap.png' // 6
];



let dia: Date = new Date();
let hora: number = dia.getHours();
let diaSemana: string = localRashid[dia.getDay()];
const classRashid: string = 'imgMapRashid';
const servesave: number = 5;
const docRashidDay: HTMLElement | null = document.getElementById('rashid-day');
const docRashidImg: HTMLElement | null = document.getElementById('rashid-img');



switch (diaSemana) {
  case localRashid[0]:
    if (docRashidDay && docRashidImg) {
      if (hora >= servesave) {
        docRashidDay.textContent = localRashid[0];
        docRashidImg.innerHTML =
          `<img class="${classRashid}" src="${imgRashid[0]}">`;
      } else {
        docRashidDay.textContent = localRashid[6];
        docRashidImg.innerHTML =
          `<img class="${classRashid}" src="${imgRashid[6]}">`;
      }
    }
    break;
  case localRashid[1]:
    if(docRashidDay && docRashidImg) {
    if (hora >= servesave) {
      docRashidDay.textContent = localRashid[1];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[1]}">`;
    } else {
      docRashidDay.textContent = localRashid[0];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[0]}">`;
    }
    }
    break;
  case localRashid[2]:
    if(docRashidDay && docRashidImg) {
    if (hora >= servesave) {
      docRashidDay.textContent = localRashid[2];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[2]}">`;
    } else {
      docRashidDay.textContent = localRashid[1];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[1]}">`;
    }
  }
    break;
  case localRashid[3]:
    if(docRashidDay && docRashidImg) {
    if (hora >= servesave) {
      docRashidDay.textContent = localRashid[3];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[3]}">`;
    } else {
      docRashidDay.textContent = localRashid[2];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[2]}">`;
    }
  }
    break;
  case localRashid[4]:
    if(docRashidDay && docRashidImg) {
    if (hora >= servesave) {
      docRashidDay.textContent = localRashid[4];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[4]}">`;
    } else {
      docRashidDay.textContent = localRashid[3];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[3]}">`;
    }
  }
    break;
  case localRashid[5]:
    if(docRashidDay && docRashidImg) {
    if (hora >= servesave) {
      docRashidDay.textContent = localRashid[5];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[5]}">`;
    } else {
      docRashidDay.textContent = localRashid[4];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[4]}">`;
    }
  }
    break;
  case localRashid[6]:
    if (docRashidDay && docRashidImg) {
    if (hora >= servesave) {
      docRashidDay.textContent = localRashid[6];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[6]}">`;
    } else {
      docRashidDay.textContent = localRashid[5];
      docRashidImg.innerHTML =
        `<img class="${classRashid}" src="${imgRashid[5]}">`;
    }
  }
    break;;
}
