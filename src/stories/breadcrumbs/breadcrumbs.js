export const createBreadcrumbs = (args) => {
  const breadcrumbs = document.createElement('ul')

  args.list.forEach((item, i) => {
    if (i !== args.list.length - 1) {
      breadcrumbs.innerHTML += `
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href=${item.link}>
          ${item.label}
        </a>
      </li>`
    } else {
      breadcrumbs.innerHTML += `
      <li class="breadcrumbs__item">
        <span class="breadcrumbs__link">
          ${item.label}
        </span>
      </li>`
    }
  })

  breadcrumbs.className = ['breadcrumbs'].join(' ')

  return breadcrumbs
}
