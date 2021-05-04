import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = renderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /Meu perfil/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Meus cartões/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Minhas compras/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sair/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
