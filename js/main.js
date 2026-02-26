
const boardEl = document.querySelector('.photoboard')

fetch('https://lanciweb.github.io/demo/api/pictures/')

.then(Response => Response.json())
.then(cards => {

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const {title,date,url}= card;
        const markup = `<div class="photocard">
            <img id="pin" src="img/pin.svg" alt="">
            <img onclick="overlay_on(event)" id="pic" src="${url}" alt="">
            <p id="date">${date}</p>
            <p id="title">${title}</p>
        </div>`
        boardEl.innerHTML += markup;
    }
    
});
const overImage = document.querySelector('.overimage')
const overlayEl = document.querySelector('.overlay')

function overlay_on (event){
    overImage.src = event.target.src;
    overlayEl.style.display = "block";
}


const buttonEl = document.querySelector('button')

buttonEl.addEventListener('click',function(){
    overlayEl.style.display = "none";
})