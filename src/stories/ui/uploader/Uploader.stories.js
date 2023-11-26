import { Uploader } from './Uploader'

export default {
  title: 'Form/Uploader',
  component: Uploader,
  argTypes: {
    multiple: { control: 'boolean' }
  }
}

export const Single = {}

export const Multiple = {
  args: {
    multiple: true
  }
}
