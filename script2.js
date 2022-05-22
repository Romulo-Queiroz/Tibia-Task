
 let arquivedetails = document.getElementById('arquive-details')
 window.addEventListener('DOMContentLoaded',() => getnews())

function getnews(){ 
    fetch('https://api.tibiadata.com/v3/news/archive/4')
.then(response => response.json())
.then(data => {
    const news = data.news;
    news.forEach(element => {
        arquivedetails.innerHTML += `
        
         <p>Date: ${element.date} </p>
         <p>News: ${element.news} </p>
         <a href=${element.url}>Cotinue lendo</a>
        
        `
    });

    
    

})

}


