import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /Meu perfil/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /nome/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/Digite sua senha/i)
    ).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/Nova senha/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Salvar/i })).toBeInTheDocument()
  })
})
