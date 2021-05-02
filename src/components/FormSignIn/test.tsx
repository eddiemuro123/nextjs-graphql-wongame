import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /entrar agora!/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)
    expect(
      screen.getByRole('link', { name: /esqueceu sua senha\?/i })
    ).toBeInTheDocument()
  })
  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignIn />)
    expect(
      screen.getByRole('link', { name: /cadastre-se/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/ainda não possui uma conta\?/i)
    ).toBeInTheDocument()
  })
})
