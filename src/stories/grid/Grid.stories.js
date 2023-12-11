import { Grid } from './Grid'
import './grid.scss'

export default {
  title: 'Basic/Grid',
  component: Grid,
  argTypes: {
    variant: {
      options: ['col-2', 'col-3'],
      control: { type: 'radio' }
    }
  },
  args: {
    itemsCount: 8
  }
}

export const AutoColumns = {}

export const TwoColumns = {
  args: {
    variant: 'col-2'
  }
}

export const ThreeColumns = {
  args: {
    variant: 'col-3'
  }
}
