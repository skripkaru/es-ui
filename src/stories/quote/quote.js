export const createQuote = () => {
  const quote = document.createElement('div')
  quote.innerHTML = `
    <div class="quote__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci amet aperiam assumenda consectetur deleniti distinctio dolores dolorum ducimus est facere id iure, labore laboriosam libero numquam odio odit perferendis provident quis quod quos, repellat repellendus sed similique sunt temporibus tenetur velit voluptatibus. Doloremque molestiae quod sint voluptatem voluptatibus.</div>
    <div class="quote__author">
      John Doe,
      <span>Developer</span>
    </div>
  `
  quote.className = ['quote'].join(' ')

  return quote
}
