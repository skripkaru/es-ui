export default {
  title: 'UI/Breadcrumbs'
}

export const Default = () => {
  return `
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="#">Home</a>
      </li>
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="#">Catalog</a>
      </li>
      <li class="breadcrumbs__item">
        <span class="breadcrumbs__link">Product</span>
      </li>
    </ul>
  `
}
