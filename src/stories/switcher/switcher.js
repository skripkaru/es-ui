export const createComponent = (args) => {
  const component = document.createElement('div')

  component.innerHTML = `
    <label class="switcher__item">
      <input class="switcher__field" type="radio" name=${args.name} hidden checked />
      <span class="switcher__label">${args.firstLabel}</span>
    </label>
    <label class="switcher__item">
      <input class="switcher__field" type="radio" name=${args.name} hidden />
      <span class="switcher__label">${args.secondLabel}</span>
    </label>
  `

  component.className = ['switcher'].join(' ')

  return component
}
