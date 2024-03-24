export const createSwitcher = (args) => {
  return `
    <div class="switcher">
      <label class="switcher__item">
        <input class="switcher__field" type="radio" name=${args.name} hidden checked />
        <span class="switcher__label">${args.firstLabel}</span>
      </label>
      <label class="switcher__item">
        <input class="switcher__field" type="radio" name=${args.name} hidden />
        <span class="switcher__label">${args.secondLabel}</span>
      </label>
    </div>
  `
}
