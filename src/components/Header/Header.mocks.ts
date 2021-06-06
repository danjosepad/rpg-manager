import { assign } from 'lodash'
import faker from 'faker'

export const HeaderMock = (data?: unknown) => 
  assign({
    name: faker.name.firstName()
  }, data)