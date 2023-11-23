export const createList = () => {
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
