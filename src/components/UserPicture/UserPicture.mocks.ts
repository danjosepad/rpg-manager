import { assign } from 'lodash'
import faker from 'faker'

export const UserPictureMock = (data?: unknown) => 
assign({
  fullName: faker.fake.name,
  size: '36',
  img: faker.internet.avatar(),
}, data)