
const boardEl = document.querySelector('.photoboard')

fetch('https://lanciweb.github.io/demo/api/pictures/')

.then(Response => Response.json())
.then(cards => {
    console.log(cards);
    
    
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const {title,date,url}= card;
        const markup = `<div class="photocard">
            <img id="pin" src="img/pin.svg" alt="">
            <img id="pic" src="${url}" alt="">
            <p id="date">${date}</p>
            <p id="title">${title}</p>
        </div>`
        boardEl.innerHTML += markup;
    }
    
});
