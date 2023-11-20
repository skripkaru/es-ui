export default {
  title: 'UI/Form'
}

export const Default = () => {
  return `
    <form class="form">
      <h2 class="form__title">To contacts us</h2>
      <div class="grid">
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
        <button class="btn btn--primary">Send</button>
      </div>
    </form>
  `
}
