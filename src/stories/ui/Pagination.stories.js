export default {
  title: 'UI/Pagination'
}

export const Default = () => {
  return `
    <div class="pagination">
       <a class="pagination__item" href="#">1</a>
       <a class="pagination__item" href="#">2</a>
       <a class="pagination__item pagination__item--active" href="#">3</a>
       <a class="pagination__item" href="#">4</a>
       <a class="pagination__item" href="#">5</a>
    </div>
  `
}
