import MicroModal from 'micromodal'

export const initModal = () => {
  MicroModal.init()
}

export const createModal = () => {
  return `
    <div class="modal" id="modal" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <header class="modal__header">
            <h3 class="modal__title" id="modal-title">Tips</h3>
            <button class="modal__close" aria-label="Close modal" data-micromodal-close>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
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
}
