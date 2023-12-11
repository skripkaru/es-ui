export const Pagination = () => {
  const pagination = document.createElement('div')
  pagination.innerHTML = `
    <a class="pagination__item" href="#">1</a>
    <a class="pagination__item" href="#">2</a>
    <a class="pagination__item pagination__item--active" href="#">3</a>
    <a class="pagination__item" href="#">4</a>
    <a class="pagination__item" href="#">5</a>
  `
  pagination.className = ['pagination'].join(' ')

  return pagination
}
