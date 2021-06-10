import { assign } from 'lodash'
import faker from 'faker'

export const TableCardMock = (data?: unknown) => 
assign({
  tableData: {
    img: faker.internet.avatar(),
    name: faker.lorem.word(),
    playersQuantity: Number(faker.finance.amount(1, 20))

  }
}, data)