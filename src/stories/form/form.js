export const createForm = () => {
  const form = document.createElement('form')
  form.classList.add('form')
  form.innerHTML = `
    <h3 style="margin: 0">To contacts us</h3>
    <label class="input">
      <input class="input__field" type="text" name="name" placeholder="Name">
      <span class="input__label">Name</span>
    </label>
    <label class="input">
      <input class="input__field" type="text" name="email" placeholder="Email">
      <span class="input__label">Email</span>
    </label>
    <button class="button button--primary" style="margin-right: auto">Send</button>
  `

  return form
}
