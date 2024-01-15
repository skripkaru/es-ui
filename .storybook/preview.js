/** @type { import('@storybook/html').Preview } */
import prettier from 'prettier'
import parserHTML from 'prettier/parser-html'
import '../src/main'
import '../src/main.scss'

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
      source: {
        transform: (code) =>
          prettier.format(code, {
            parser: 'html',
            plugins: [parserHTML]
          })
      }
    }
  }
}

export default preview
