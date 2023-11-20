import '../../scripts/modal'

export default {
  title: 'UI/Modal'
}

export const Default = () => {
  return `
    <div id="default" class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__dialog">
        <div class="modal__header">
          <h2 class="modal__title">Error</h2>
          <button class="modal__close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.92461 13.125C1.63466 13.4149 1.16456 13.4149 0.87461 13.125C0.58466 12.835 0.58466 12.3649 0.87461 12.075L5.94961 6.99998L0.874609 1.92498C0.58466 1.63503 0.58466 1.16493 0.874609 0.874976C1.16456 0.585026 1.63466 0.585026 1.92461 0.874976L6.99961 5.94998L12.0746 0.874976C12.3646 0.585026 12.8347 0.585026 13.1246 0.874976C13.4146 1.16493 13.4146 1.63503 13.1246 1.92498L8.04961 6.99998L13.1246 12.075C13.4146 12.3649 13.4146 12.835 13.1246 13.125C12.8347 13.4149 12.3646 13.4149 12.0746 13.125L6.99961 8.04998L1.92461 13.125Z" />
            </svg>
          </button>
        </div>
        <div class="modal__body">
          Something went wrong...
        </div>
      </div>
    </div>

    <button class="btn btn--primary" data-modal="default">Open</button>
  `
}

export const Auth = () => {
  return `
    <div id="auth" class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__dialog">
        <div class="modal__header">
          <h2 class="modal__title">
            Login
            <a class="link link--primary" href="#">Register</a>
          </h2>
          <button class="modal__close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.92461 13.125C1.63466 13.4149 1.16456 13.4149 0.87461 13.125C0.58466 12.835 0.58466 12.3649 0.87461 12.075L5.94961 6.99998L0.874609 1.92498C0.58466 1.63503 0.58466 1.16493 0.874609 0.874976C1.16456 0.585026 1.63466 0.585026 1.92461 0.874976L6.99961 5.94998L12.0746 0.874976C12.3646 0.585026 12.8347 0.585026 13.1246 0.874976C13.4146 1.16493 13.4146 1.63503 13.1246 1.92498L8.04961 6.99998L13.1246 12.075C13.4146 12.3649 13.4146 12.835 13.1246 13.125C12.8347 13.4149 12.3646 13.4149 12.0746 13.125L6.99961 8.04998L1.92461 13.125Z" />
            </svg>
          </button>
        </div>
        <div class="modal__body">
          <div class="grid">
            <div class="input">
              <label for="email">Email</label>
              <input id="email" type="email">
            </div>
            <div class="input">
              <label for="password">Password</label>
              <input id="password" type="password">
            </div>
          </div>
        </div>
        <div class="modal__footer">
          <a class="link link--primary" href="#">Forgot your password?</a>
          <button class="btn btn--primary">Enter</button>
        </div>
      </div>
    </div>

    <button class="btn btn--primary" data-modal="auth">Open</button>
  `
}

export const Info = () => {
  return `
    <div id="info" class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__dialog">
        <div class="modal__header">
          <h2 class="modal__title">Message sent</h2>
          <button class="modal__close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.92461 13.125C1.63466 13.4149 1.16456 13.4149 0.87461 13.125C0.58466 12.835 0.58466 12.3649 0.87461 12.075L5.94961 6.99998L0.874609 1.92498C0.58466 1.63503 0.58466 1.16493 0.874609 0.874976C1.16456 0.585026 1.63466 0.585026 1.92461 0.874976L6.99961 5.94998L12.0746 0.874976C12.3646 0.585026 12.8347 0.585026 13.1246 0.874976C13.4146 1.16493 13.4146 1.63503 13.1246 1.92498L8.04961 6.99998L13.1246 12.075C13.4146 12.3649 13.4146 12.835 13.1246 13.125C12.8347 13.4149 12.3646 13.4149 12.0746 13.125L6.99961 8.04998L1.92461 13.125Z" />
            </svg>
          </button>
        </div>
        <div class="modal__body">
          <div class="toast toast--success">
            Thank you! Your message has been sent. You are well done.
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn--primary" data-modal="info">Open</button>
  `
}
