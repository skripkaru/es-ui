export const Modal = () => {
  const modal = document.createElement('div')
  modal.innerHTML = `
    <div class="modal" id="modal" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <header class="modal__header">
            <h3 class="modal__title" id="modal-title">Tips</h3>
            <button class="modal__close" aria-label="Close modal" data-micromodal-close>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-micromodal-close>
                <path d="M1.92461 13.125C1.63466 13.4149 1.16456 13.4149 0.87461 13.125C0.58466 12.835 0.58466 12.3649 0.87461 12.075L5.94961 6.99998L0.874609 1.92498C0.58466 1.63503 0.58466 1.16493 0.874609 0.874976C1.16456 0.585026 1.63466 0.585026 1.92461 0.874976L6.99961 5.94998L12.0746 0.874976C12.3646 0.585026 12.8347 0.585026 13.1246 0.874976C13.4146 1.16493 13.4146 1.63503 13.1246 1.92498L8.04961 6.99998L13.1246 12.075C13.4146 12.3649 13.4146 12.835 13.1246 13.125C12.8347 13.4149 12.3646 13.4149 12.0746 13.125L6.99961 8.04998L1.92461 13.125Z" />
              </svg>
            </button>
          </header>
          <div class="modal__content" id="modal-1-content">
            <p>This is a message</p>
          </div>
          <footer class="modal__footer">
            <button class="button button--primary">Enter</button>
            <button class="button button--secondary" data-micromodal-close>Close</button>
          </footer>
        </div>
      </div>
    </div>

    <button class="button button--primary" data-micromodal-trigger="modal">Open</button>
  `

  return modal
}
