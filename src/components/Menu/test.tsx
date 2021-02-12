import { fireEvent, screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/Log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="caio" />)

    expect(screen.getByText(/My Account/i)).toBeInTheDocument()
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument()
  })
})
