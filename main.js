var button = document.querySelector('.submit-btn');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var cardSection = document.querySelector('.card-section')


button.addEventListener('click', () => {
	createCard(event)
})

createCard = (event) => {
	event.preventDefault()
	var card =
    `<div class="card-display">
      <h2>title</h2>
      <p>this is a card body</p>
      <div class="card-button">
        <button class="up-vote btn">up</button>
        <button class="down-vote btn">Down</button>
        <p class="card-text"></p>
        <button class="delete-button" > X </button>
      </div>
     </div>`
	cardSection.innerHTML += card;
}

