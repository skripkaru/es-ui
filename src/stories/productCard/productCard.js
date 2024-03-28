export const createProductCard = (args) => {
  const card = document.createElement('div')
  card.innerHTML = `
    <div class="product-card__inner">
      <div class="product-card__header">
        <div class="product-card__img">
          <img src=${args.image} alt="">
        </div>
      </div>
      <div class="product-card__body">
        <h3 class="product-card__title">${args.title}</h3>
        <p class="product-card__text">${args.description}</p>
      </div>
      <div class="product-card__footer">
        <button class="button button--primary">Add to cart</button>
      </div>
    </div>
  `
  const variant = args.variant ? `product-card--${args.variant}` : ''
  card.className = ['product-card', variant].join(' ')

  return card
}
