import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /Preço/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Filtrar por/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Sistema/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Gênero/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(
      screen.getByRole('checkbox', { name: /Abaixo de R\$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /Menor para maior/i })
    ).toBeInTheDocument()
  })

  it('should render filter button', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('button', { name: /Filtrar/i })).toBeInTheDocument()
  })
})
