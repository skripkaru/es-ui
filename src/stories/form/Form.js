export const Form = () => {
  const form = document.createElement('div')
  form.classList.add('form')
  form.innerHTML = `
    <h3 style="margin: 0">To contacts us</h3>
    <div class="grid">
      <div class="input">
        <label class="input__label" for="name">Name</label>
        <input class="input__field" id="name" type="text">
      </div>
      <div class="input">
        <label class="input__label" for="email">Email</label>
        <input class="input__field" id="email" type="text">
      </div>
      <div class="textarea">
        <label for="message">Message</label>
        <textarea id="message"></textarea>
      </div>
    </div>
    <button class="button button--primary" style="margin-right: auto">Send</button>
  `

  return form
}
