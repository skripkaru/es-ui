export const createComponent = () => {
  const component = document.createElement('form')

  component.innerHTML = `
    <div class="form__header">
      <h3 class="form__title">To contacts us</h3>
    </div>
    <div class="form__body">
      <label class="input js-input">
        <div class="input__inner" tabindex="-1">
          <input class="input__field" type="text" name="name" placeholder="Name" tabindex="0">
        </div>
      </label>
      <label class="input js-input">
        <div class="input__inner" tabindex="-1">
          <input class="input__field" type="tel" name="phone" placeholder="Phone" tabindex="0">
        </div>
      </label>
      <label class="input js-input">
        <div class="input__inner" tabindex="-1">
          <input class="input__field" type="email" name="email" placeholder="Email" tabindex="0">
        </div>
      </label>
    </div>
    <div class="form__footer">
      <button class="button button--primary">Send</button>
    </div>
  `

  component.className = ['form'].join(' ')

  return component
}
