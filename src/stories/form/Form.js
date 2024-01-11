export const Form = () => {
  const form = document.createElement('form')
  form.classList.add('form')
  form.innerHTML = `
    <h3 style="margin: 0">To contacts us</h3>
    <div class="grid">
      <label class="input">
        <input class="input__field" type="text" name="name" placeholder="Name">
        <span class="input__label">Name</span>
      </label>
      <label class="input">
        <input class="input__field" type="text" name="email" placeholder="Email">
        <span class="input__label">Email</span>
      </label>
      <label class="textarea">
        <textarea class="textarea__field" name="message" placeholder="Message"></textarea>
        <span class="textarea__label">Message</span>
      </label>
    </div>
    <button class="button button--primary" style="margin-right: auto">Send</button>
  `

  return form
}
