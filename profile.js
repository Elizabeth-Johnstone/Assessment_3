// In profile.js, create event listeners that check for a click on each of these buttons. If a user clicks on “My Favorite Color”, it should alert the user of your favorite color, and so on.


const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')


function alertColor(event) {
    alert('My favorite color is mint-green')
}

function alertPlace(event) {
    alert('My favorite place is London')
}

function alertRitual(event) {
    alert('My favorite ritual is Halloween')
}

color.addEventListener('click', alertColor)
place.addEventListener('click', alertPlace)
ritual.addEventListener('click', alertRitual)