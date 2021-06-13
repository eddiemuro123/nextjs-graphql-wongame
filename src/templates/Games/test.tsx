import { render, screen } from '@testing-library/react'

import Games from '.'

describe('<Games />', () => {
  it('should render the heading', () => {
    const { container } = render(<Games />)

    expect(screen.getByRole('heading', { name: /Games/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
