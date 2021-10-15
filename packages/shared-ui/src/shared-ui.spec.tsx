import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../utils/tests/helpers'

import { SharedUi } from '.'
// import theme from '../../styles/Theme'

describe('<SharedUi />', () => {
  it('should render the SharedUi component', () => {
    renderWithTheme(<SharedUi />)
    expect(screen.getByTestId('pauloluan-shared-ui-id')).toBeInTheDocument()
  })
})
