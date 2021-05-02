import { fireEvent, screen } from '@testing-library/dom'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pesquisar/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Carrinho de compras/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/abrir menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/fechar menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getAllByText(/entrar/i)).toHaveLength(2)
    expect(screen.getByText(/Registrar-se/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="caio" />)

    expect(screen.getByText(/Minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/Lista de desejos/i)).toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/registrar-se/i)).not.toBeInTheDocument()
  })
})
