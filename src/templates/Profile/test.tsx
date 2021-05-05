import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Profile>Children</Profile>)

    expect(
      screen.getByRole('heading', { name: /Meu perfil/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/Children/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
