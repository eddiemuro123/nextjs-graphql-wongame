import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /My profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/Your password/i)).toBeInTheDocument()

    expect(screen.getByPlaceholderText(/New password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Save/i })).toBeInTheDocument()
  })
})
