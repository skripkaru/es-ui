export const createComponent = (args) => {
  const component = document.createElement('div')
  const table = document.createElement('table')

  const createHeader = () => {
    const thead = document.createElement('thead')
    const tr = document.createElement('tr')

    args.data.header.forEach((item) => {
      const th = document.createElement('th')
      th.innerHTML = item
      tr.appendChild(th)
    })

    thead.appendChild(tr)

    return thead
  }

  const createBody = () => {
    const tbody = document.createElement('tbody')

    args.data.body.forEach((row) => {
      const tr = document.createElement('tr')

      Object.values(row).forEach((item) => {
        const td = document.createElement('td')
        td.innerHTML = String(item)
        tr.appendChild(td)
      })

      tbody.appendChild(tr)
    })

    return tbody
  }

  const thead = createHeader()
  const tbody = createBody()

  table.appendChild(thead)
  table.appendChild(tbody)
  component.appendChild(table)

  component.className = ['table'].join(' ')

  return component
}
