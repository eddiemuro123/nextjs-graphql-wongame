import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown items={items} total="$300,00" />)

    expect(screen.getByLabelText(/Shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={items} total="$300,00" />)

    expect(screen.getByText('$300,00')).toBeInTheDocument()
    expect(screen.getByText(/Borderlands 3/i)).toBeInTheDocument()
  })
})
