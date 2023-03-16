var localRashid = [
    'Carlin',
    'Svargrond',
    'Liberty Bay',
    'Port Hope',
    'Ankrahmun',
    'Darashia',
    'Edron' // 6
];
var imgRashid = [
    '../img/carlinmap.png',
    '../img/svarmap.png',
    '../img/phmap.png',
    '../img/ankmap.png',
    '../img/daramap.png',
    '../img/edronmap.png' // 6
];
var dia = new Date();
var hora = dia.getHours();
var diaSemana = localRashid[dia.getDay()];
var classRashid = 'imgMapRashid';
var servesave = 5;
var docRashidDay = document.getElementById('rashid-day');
var docRashidImg = document.getElementById('rashid-img');
switch (diaSemana) {
    case localRashid[0]:
        if (docRashidDay && docRashidImg) {
            if (hora >= servesave) {
                docRashidDay.textContent = localRashid[0];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[0], "\">");
            }
            else {
                docRashidDay.textContent = localRashid[6];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[6], "\">");
            }
        }
        break;
    case localRashid[1]:
        if (docRashidDay && docRashidImg) {
            if (hora >= servesave) {
                docRashidDay.textContent = localRashid[1];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[1], "\">");
            }
            else {
                docRashidDay.textContent = localRashid[0];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[0], "\">");
            }
        }
        break;
    case localRashid[2]:
        if (docRashidDay && docRashidImg) {
            if (hora >= servesave) {
                docRashidDay.textContent = localRashid[2];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[2], "\">");
            }
            else {
                docRashidDay.textContent = localRashid[1];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[1], "\">");
            }
        }
        break;
    case localRashid[3]:
        if (docRashidDay && docRashidImg) {
            if (hora >= servesave) {
                docRashidDay.textContent = localRashid[3];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[3], "\">");
            }
            else {
                docRashidDay.textContent = localRashid[2];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[2], "\">");
            }
        }
        break;
    case localRashid[4]:
        if (docRashidDay && docRashidImg) {
            if (hora >= servesave) {
                docRashidDay.textContent = localRashid[4];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[4], "\">");
            }
            else {
                docRashidDay.textContent = localRashid[3];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[3], "\">");
            }
        }
        break;
    case localRashid[5]:
        if (docRashidDay && docRashidImg) {
            if (hora >= servesave) {
                docRashidDay.textContent = localRashid[5];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[5], "\">");
            }
            else {
                docRashidDay.textContent = localRashid[4];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[4], "\">");
            }
        }
        break;
    case localRashid[6]:
        if (docRashidDay && docRashidImg) {
            if (hora >= servesave) {
                docRashidDay.textContent = localRashid[6];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[6], "\">");
            }
            else {
                docRashidDay.textContent = localRashid[5];
                docRashidImg.innerHTML =
                    "<img class=\"".concat(classRashid, "\" src=\"").concat(imgRashid[5], "\">");
            }
        }
        break;
        ;
}
