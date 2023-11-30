/** @type { import("@storybook/html-webpack5").StorybookConfig } */

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../src/assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  docs: {
    autodocs: true
  }
}
export default config
