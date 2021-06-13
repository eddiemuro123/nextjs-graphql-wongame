import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Dropdown title="Testing">Test</Dropdown>
    )
  })
})
