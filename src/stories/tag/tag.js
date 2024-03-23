export const createTag = () => {
  const tags = document.createElement('div')
  tags.innerHTML = `
  <span class="c-tag is-active">News</span>
  <span class="c-tag">Sport</span>
  <span class="c-tag">Hobby</span>
`
  tags.className = ['tags'].join(' ')

  return tags
}
