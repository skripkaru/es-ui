export const Tags = () => {
  const tags = document.createElement('div')
  tags.innerHTML = `
  <span class="tags__item tags__item--active">News</span>
  <span class="tags__item">Sport</span>
  <span class="tags__item">Hobby</span>
`
  tags.className = ['tags'].join(' ')

  return tags
}
