import { Table } from './Table'
import './table.scss'

export default {
  title: 'Data/Table',
  component: Table,
  args: {
    data: {
      header: ['ID', 'Date', 'Number', 'Price'],
      body: [
        { id: '1000123', date: '01.01.2023', number: 11, price: 8000 },
        { id: '1000122', date: '27.07.2022', number: 8, price: 3200 },
        { id: '1000121', date: '19.04.2022', number: 3, price: 990 }
      ]
    }
  }
}

export const Default = {}
