export default {
  title: 'Lists'
}

export const Lists = {
  render: () => {
    const list = document.createElement('div')
    list.innerHTML = `
     <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>
    <br>
    <ol>
     <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
  `

    return list
  }
}
