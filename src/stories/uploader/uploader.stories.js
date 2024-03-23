import { createUploader as Uploader } from './uploader'
import './uploader.scss'

export default {
  title: 'Uploader',
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
