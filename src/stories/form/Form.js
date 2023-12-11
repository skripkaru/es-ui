export const Form = () => {
  const form = document.createElement('div')
  form.classList.add('form')
  form.innerHTML = `
    <h2 class="form__title">To contacts us</h2>
    <div class="input">
      <label for="name">Name</label>
      <input id="name" type="text">
    </div>
    <div class="input">
      <label for="email">Email</label>
      <input id="email" type="text">
    </div>
    <div class="textarea">
      <label for="message">Message</label>
      <textarea id="message"></textarea>
    </div>
    <button class="button button--primary">Send</button>
  `

  return form
}
