import React, { ReactNode } from 'react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'

type RenderWithRouter = (component: ReactNode, route?: string) => { history: MemoryHistory }

declare global {
  namespace NodeJS {
    interface Global {
      renderWithRouter: RenderWithRouter
    }
  }

  namespace globalThis {
    const renderWithRouter: RenderWithRouter
  }
}

global.renderWithRouter = (component, route = '/') => {
  const history = createMemoryHistory()

  if (route) {
    history.push(route)
  }

  render(
    <Router history={history}>
      {component}
    </Router>
  )

  return {
    history
  }
}
