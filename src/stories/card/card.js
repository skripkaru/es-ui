export const createCard = (args) => {
  const card = document.createElement('a')
  card.href = args.url
  card.innerHTML = `
    <div class="card__img">
      <img src=${args.image} alt="">
    </div>
    <div class="card__content">
      <h3 class="card__title">${args.title}</h3>
      <p class="card__text">${args.description}</p>
    </div>
  `
  card.className = ['card'].join(' ')

  return card
}
