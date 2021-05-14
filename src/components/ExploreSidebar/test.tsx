import { render, screen } from '@testing-library/react'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the heading', () => {
    const { container } = render(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /ExploreSidebar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
