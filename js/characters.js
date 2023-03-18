var form = document.getElementById('form');
var nome = document.getElementById('txtChar');
var playersInfo = document.getElementById('show-info');
function innerOtherCharacters(characters) {
    var list = "";
    characters.forEach(function (character) {
        list += "<li>".concat(character.name, "</li>");
    });
    return "\n    <ul class='othersCharacetrs'>\n      ".concat(list, ".\n    </ul>\n  ");
}
function getPlayer(name) {
    fetch("https://api.tibiadata.com/v3/character/".concat(name))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        playersInfo.innerHTML = "\n        <p>Name: ".concat(data.characters.character.name, "</p>\n  ,      <p>Sex: ").concat(data.characters.character.sex, "</p>\n        <p>Vocation: ").concat(data.characters.character.vocation, "</p>\n        <p>Level: ").concat(data.characters.character.level, "</p>\n        <p>Archivement Points: ").concat(data.characters.character.achievement_points, "</p>\n        <p>World: ").concat(data.characters.character.world, "</p>\n        <p>Created: ").concat(data.characters.account_information.created, "</p>\n        <p>Residence: ").concat(data.characters.character.residence, "</p>\n        <p>Account Status: ").concat(data.characters.character.account_status, "</p>\n        <p class= \"tittleOthers\">Other characters:</p>").concat(innerOtherCharacters(data.characters.other_characters), "\n      ");
    });
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nomePlayer = nome.value;
    getPlayer(nomePlayer);
});
