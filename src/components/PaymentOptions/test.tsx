import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'
import cardsMocks from './mock'

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMocks} handlePayment={jest.fn} />
    )

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/Adicionar um novo cartão/)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMocks} handlePayment={jest.fn} />
    )

    userEvent.click(screen.getByLabelText(/4325/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not call handlePayments when button is disabled', () => {
    const handlePayments = jest.fn()

    renderWithTheme(
      <PaymentOptions cards={cardsMocks} handlePayment={handlePayments} />
    )

    userEvent.click(screen.getByRole('button', { name: /Comprar agora/i }))
    expect(handlePayments).not.toHaveBeenCalled()
  })

  it('should call handlePayments when credit card is selected', async () => {
    const handlePayments = jest.fn()

    renderWithTheme(
      <PaymentOptions cards={cardsMocks} handlePayment={handlePayments} />
    )

    userEvent.click(screen.getByLabelText(/4325/))
    userEvent.click(screen.getByRole('button', { name: /Comprar agora/i }))

    await waitFor(() => {
      expect(handlePayments).toHaveBeenCalled()
    })
  })
})
