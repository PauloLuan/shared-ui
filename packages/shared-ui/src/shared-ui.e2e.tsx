import { mount } from '@cypress/react'
import { SharedUi } from '.'

const testId = 'pauloluan-shared-ui-id'

it('when a <SharedUi /> is rendered, should be visible', () => {
  mount(<SharedUi />)
  const foundComponent = cy.get(`[data-testid=${testId}]`)
  foundComponent.should('be.visible')
})
