import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'Your wishlist is empty',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('img', {
        name: /Um gamer jogando vídeo-game num sofá/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Your wishlist is empty/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/A simple description/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Voltar para a loja/i })
    ).toHaveAttribute('href', '/')
  })

  it('should not render link when not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /Voltar para a loja/i })
    ).not.toBeInTheDocument()
  })
})
