import { assign } from 'lodash'
import faker from 'faker'

export const InputMock = (data?: unknown ) => 
assign({
  label: faker.lorem.word(),
  placeholder: faker.lorem.words(3),
}, data)