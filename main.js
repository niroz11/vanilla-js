var button = document.querySelector('.submit-btn');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var cardSection = document.querySelector('.card-section')


button.addEventListener('click', () => {
  event.preventDefault()
	createIdea(event)
})

createIdea = (event) => {
  var title = titleInput.value
  var body = bodyInput.value
  var idea = new Idea(title,body)
  createCard(idea)
  console.log(idea, "idea created")
}

createCard = (idea) => {
	event.preventDefault()
	var card =
    `<div class="card-display">
      <h2>${idea.title}</h2>
      <p>${idea.body}</p>
      <div class="card-button">
        <button class="up-vote btn">up</button>
        <button class="down-vote btn">Down</button>
        <p class="card-text"></p>
        <button class="delete-button" > X </button>
      </div>
     </div>`
	cardSection.innerHTML += card;
}

