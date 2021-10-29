console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert('This form has been successfully submitted')
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);


function catMouse(event){
	event.preventDefault();
	alert('Nice costume!')
}

let cat = document.querySelector('img#cat-pic')
cat.addEventListener('mouseover', catMouse)


// Add an event listener that listens for a mouseover event. When the user mouses over the picture on the page (cat or rubber duck) the page should alert give the user a compliment.