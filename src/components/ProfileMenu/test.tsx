import { screen } from '@testing-library/react'
import theme from 'styles/theme'
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

  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards"/>)

    expect(screen.getByRole('link', { name: /Meus cartões/i })).toHaveStyle({
      background: theme.colors.secondary,
      color: theme.colors.white
    })
  })
})
