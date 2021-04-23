import 'match-media-mock'

import BannerSlide from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/dom'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlide />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlide items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlide items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlide items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
