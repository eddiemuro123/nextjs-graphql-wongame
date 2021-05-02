import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getAllByPlaceholderText(/Senha/i)).toHaveLength(2)
    expect(screen.getByPlaceholderText(/Confirmar senha/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /cadastrar agora!/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text and link to sign in', () => {
    renderWithTheme(<FormSignUp />)

    expect(
      screen.getByRole('link', { name: /entre agora/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/já possui uma conta\?/i)).toBeInTheDocument()
  })
})
