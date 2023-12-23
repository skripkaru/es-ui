export const Card = (args) => {
  const card = document.createElement('a')
  card.href = args.url
  card.innerHTML = `
    <div class="card__img">
      <img src=${args.image} alt="">
    </div>
    <h3>${args.title}</h3>
    <p>${args.description}</p>
  `
  card.className = ['card'].join(' ')

  return card
}
