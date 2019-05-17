const button = document.querySelector('.submit-btn');
const titleInput = document.querySelector('.title-input');
const bodyInput = document.querySelector('.body-input');
const cardSection = document.querySelector('.card-section')
const ideasArray = []


button.addEventListener('click', () => {
  event.preventDefault()
	createIdea(event)
})



createIdea = (event) => {
  const title = titleInput.value
  const body = bodyInput.value
  const idea = new Idea(title,body)
  console.log(idea)
  ideasArray.push(idea)
  createCard(idea)
  titleInput.value = '';
  bodyInput.value = '';
  idea.saveToStorage()
  
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

