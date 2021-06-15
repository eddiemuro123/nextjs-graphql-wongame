import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Loader from '.'

describe('<Loader />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Loader />)
    expect(screen.getByLabelText('Loading')).toBeInTheDocument()
  })
})
