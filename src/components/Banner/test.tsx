import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    // Banner Title
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    // Banner subtitle
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    // Banner img
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
