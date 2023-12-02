/** @type { import('@storybook/html').Preview } */
import '../src/scripts/main'
import '../src/styles/main.scss'
import { renderToHTML } from './render.html'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      transform: (src) => renderToHTML(src)
    }
  }
}

export default preview
