import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'Your wishlist is empty',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('img', {
        name: /A gamer playing video games on the couch/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Your wishlist is empty/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/A simple description/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Back to the store/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /Back to the store/i })
    ).not.toBeInTheDocument()
  })
})
