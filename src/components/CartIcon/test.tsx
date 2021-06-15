import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/Shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/Cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={10} />)

    expect(screen.getByLabelText(/Shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Cart items/i)).toBeInTheDocument()
    expect(screen.getByText(10)).toBeInTheDocument()
  })
})
