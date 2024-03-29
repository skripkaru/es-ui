export const createComponent = (args) => {
  const component = document.createElement('ul')

  args.items.forEach((item, i) => {
    if (i !== args.items.length - 1) {
      component.innerHTML += `
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href=''>
          ${item.label}
        </a>
      </li>`
    } else {
      component.innerHTML += `
      <li class="breadcrumbs__item">
        ${item.label}
      </li>`
    }
  })

  component.className = ['breadcrumbs'].join(' ')

  return component
}
