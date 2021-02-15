import { render, fireEvent } from '@testing-library/react'
import { MovieProvider } from 'context/movie-context'
import { ThemeProvider } from 'context/theme-context'
import Search from './Search'

describe('Search', () => {
  test('renders Search component', () => {
    render(
      <ThemeProvider>
        <MovieProvider>
          <Search />
        </MovieProvider>
      </ThemeProvider>
    )
  })

  test('onChange fires', () => {
    const onChange = jest.fn()
    const { getByRole } = render(
      <ThemeProvider>
        <MovieProvider>
          <Search onChange={onChange} />
        </MovieProvider>
      </ThemeProvider>
    )
    const input = getByRole('textbox')
    const mockTypingEvent = {
      target: {
        value: 'changed-value',
      },
    }
    fireEvent.change(input, mockTypingEvent)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
