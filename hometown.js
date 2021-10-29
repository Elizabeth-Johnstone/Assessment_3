

const restaurantButton = document.querySelector("#recommender")

const restaurants = document.querySelectorAll("#restaurant")


function randomGenerator() {
    const random = Math.floor(Math.random() * restaurants.length);
    const response = restaurants[random]
    alert(`You should go to ${response}`)
}

restaurantButton.addEventListener('click', randomGenerator)

