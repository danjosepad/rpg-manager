import React from 'react'
import { assign } from 'lodash'
import faker from 'faker'

export const ModalMock = (data?: unknown) => 
  assign({
    isShowing: true,
    children: <div>Test</div>,
    title: faker.name.title(),
    onClose: () => {}
  }, data)