export default {
  title: 'UI/Placeholder'
}

export const Default = () => {
  return `
    <div class="placeholder">
      <span class="placeholder__error">404</span>
      <h2 class="placeholder__title">Page not found</h2>
      <p class="placeholder__body">
        Go to
        <a class="link link--primary" href="#">home page</a>
      </p>
    </div>
  `
}
