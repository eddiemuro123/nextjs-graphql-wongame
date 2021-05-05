import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import cardMock from 'components/PaymentOptions/mock'
import CardList from '.'

describe('<CardList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardList cards={cardMock} />)

    expect(
      screen.getByRole('heading', { name: /Meus cartões/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/mastercard.png'
    )

    expect(screen.getByText(/4325/i)).toBeInTheDocument()
    expect(screen.getByText(/4326/i)).toBeInTheDocument()
  })
})
