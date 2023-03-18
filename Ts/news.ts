const arquivoDetails = document.getElementById('arquive-details');

window.addEventListener('DOMContentLoaded', () => {
    getNews();
});

function getNews() {
    fetch('https://api.tibiadata.com/v3/news/archive/2')
        .then(response => response.json())
        .then(data => {
            const news = data.news;
            news.forEach(element => {
                arquivoDetails.innerHTML += `
                    <h2>Data: ${element.date}</h2>
                    <p>News: ${element.news}</p>
                    <div><a target="_blank" href=${element.url}>Continue lendo</a></div>
                `;
            });
        })
        .catch(error => console.log(error));
}
