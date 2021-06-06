import { assign } from 'lodash'
import faker from 'faker'

export const ButtonMock = (data?: unknown) => 
  assign(
    {
      text: faker.lorem.words(3),
      background: 'black',
      onClick: () => {},
      loading: false,
    },
    data
  )