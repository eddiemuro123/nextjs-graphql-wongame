import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from '.'
import items from './mock'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('heading', { name: /Preço/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Filtrar por/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Sistema/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Gênero/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(
      screen.getByRole('checkbox', { name: /Abaixo de R\$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /Menor para maior/i })
    ).toBeInTheDocument()
  })

  it('should render filter button', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('button', { name: /Filtrar/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, filtrar_por: 'menor-para-maior' }}
        onFilter={jest.fn()}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(
      screen.getByRole('radio', { name: /Menor para maior/i })
    ).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, filtrar_por: 'menor-para-maior' }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /Filtrar/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      filtrar_por: 'menor-para-maior'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/menor para maior/i))
    userEvent.click(screen.getByRole('button', { name: /Filtrar/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      filtrar_por: 'menor-para-maior'
    })
  })

  it('should altern between radio options', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/menor para maior/i))
    userEvent.click(screen.getByLabelText(/maior para menor/i))
    userEvent.click(screen.getByRole('button', { name: /Filtrar/i }))

    expect(onFilter).toBeCalledWith({
      filtrar_por: 'maior-para-menor'
    })
  })
})
