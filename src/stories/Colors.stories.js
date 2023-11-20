export default {
  title: 'Colors'
}

export const Colors = () => {
  return `
    <div class="grid">
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--accent)'>Accent #EA7000</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--accent)'>Accent Dark #BC5A00</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--dark)'>Dark #333333</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--default)'>Gray #A2A2A2</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--line)'>Line #E0E0E0</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--light)'>Light #F7F7F7</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--error)'>Error #EF3D38</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--error-bg)'>Error Light rgba(255, 87, 82, 0.1)</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--success)'>Success #3AB689</div>
      <div style='padding: .5rem 1rem; color: var(--base-light); background-color: var(--success-bg)'>Success Light rgba(104, 226, 182, 0.1)</div>
    </div>
  `
}
