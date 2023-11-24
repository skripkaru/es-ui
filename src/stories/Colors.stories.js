export default {
  title: 'Colors'
}

export const Colors = {
  render: () => {
    const color = document.createElement('div')
    color.innerHTML = `
   <div class="grid">
      <div style='padding: .5rem 1rem; color: var(--dark); background-color: var(--light)'>--light: #f7f7f7</div>
      <div style='padding: .5rem 1rem; color: var(--light); background-color: var(--line)'>--line: #e0e0e0</div>
      <div style='padding: .5rem 1rem; color: var(--light); background-color: var(--default)'>--default: #a2a2a2</div>
      <div style='padding: .5rem 1rem; color: var(--light); background-color: var(--dark)'>--dark: #333333</div>
      <div style='padding: .5rem 1rem; color: var(--light); background-color: var(--accent)'>--accent: #ea7000</div>
      <div style='padding: .5rem 1rem; color: var(--light); background-color: var(--accent-dark)'>--accent-dark: #bc5a00</div>
      <div style='padding: .5rem 1rem; color: var(--light); background-color: var(--error)'>--error: #ef3d38</div>
      <div style='padding: .5rem 1rem; color: var(--light); background-color: var(--success)'>--success: #3ab689</div>
    </div>
  `

    return color
  }
}
