import { assign } from 'lodash'
import faker from 'faker'

const generateRandomData = () => ({
  tableData: {
    img: faker.internet.avatar(),
    name: faker.lorem.word(),
    playersQuantity: Number(faker.finance.amount(1, 20))
  }
})

export const TablesMock = (data?: unknown) => 
assign({
  data: [generateRandomData(), generateRandomData(), generateRandomData()]
}, data)