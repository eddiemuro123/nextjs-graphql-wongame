import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My Game Title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Game Description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /Adicionar ao carrinho/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Lista de desejos/i })
    ).toBeInTheDocument()
  })
})
