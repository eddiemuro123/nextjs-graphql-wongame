import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Caio" />)

    expect(screen.getByText(/Caio/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Caio" />)

    // open menu
    userEvent.click(screen.getByText(/Caio/i))

    expect(
      screen.getByRole('link', { name: /my account/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Log out/i })).toBeInTheDocument()
  })
})
