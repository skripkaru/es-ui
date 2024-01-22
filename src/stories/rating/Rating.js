export const Rating = () => {
  const component = document.createElement('div')

  component.innerHTML = `
    <span class="rating__count">3.5</span>
    <div class="rating__stars">
      <span class="rating__star">
        <svg width="20" height="20" viewBox="0 0 96 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.002 73.016L23.284 86L28.005 58.504L8 39.028L35.637 35.016L48.002 10L60.363 35.016L88 39.028L67.999 58.504L72.724 86L48.002 73.016Z" />
        </svg>
      </span>
      <span class="rating__star">
        <svg width="20" height="20" viewBox="0 0 96 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.002 73.016L23.284 86L28.005 58.504L8 39.028L35.637 35.016L48.002 10L60.363 35.016L88 39.028L67.999 58.504L72.724 86L48.002 73.016Z" />
        </svg>
      </span>
      <span class="rating__star">
        <svg width="20" height="20" viewBox="0 0 96 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.002 73.016L23.284 86L28.005 58.504L8 39.028L35.637 35.016L48.002 10L60.363 35.016L88 39.028L67.999 58.504L72.724 86L48.002 73.016Z" />
        </svg>
      </span>
      <span class="rating__star">
        <svg width="20" height="20" viewBox="0 0 96 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M88 38.96L59.24 36.48L48 10L36.76 36.52L8 38.96L29.84 57.88L23.28 86L48 71.08L72.72 86L66.2 57.88L88 38.96ZM48 63.6V26.4L54.84 42.56L72.36 44.08L59.08 55.6L63.08 72.72L48 63.6Z"/>
        </svg>
      </span>
      <span class="rating__star">
        <svg width="20" height="20" viewBox="0 0 96 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.998 73.016L72.716 86L67.995 58.5L88 39.028L60.363 35.016L47.998 10L35.637 35.016L8 39.028L28.001 58.5L23.276 86L47.998 73.016ZM47.998 63.976L33.9152 71.376L36.606 55.708L25.2101 44.612L40.9546 42.328L47.998 28.076L55.0414 42.328L70.7859 44.612L59.39 55.708L62.0808 71.372L47.998 63.976Z"/>
        </svg>
      </span>
    </div>
  `

  component.className = ['rating'].join(' ')

  return component
}
