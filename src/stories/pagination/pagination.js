export const createPagination = () => {
  const pagination = document.createElement('div')
  pagination.innerHTML = `
    <a class="pagination__item" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
      </svg>
    </a>
    <a class="pagination__item is-active" href="#">1</a>
    <a class="pagination__item" href="#">2</a>
    <a class="pagination__item" href="#">3</a>
    <a class="pagination__item" href="#">...</a>
    <a class="pagination__item" href="#">10</a>
    <a class="pagination__item" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
      </svg>
    </a>
  `
  pagination.className = ['pagination'].join(' ')

  return pagination
}
