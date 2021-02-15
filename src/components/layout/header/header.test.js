import { render, screen } from '@testing-library/react'
import { MovieProvider } from 'context/movie-context'
import { ThemeProvider } from 'context/theme-context'
import { Header } from './header'

test('renders header text', () => {
  render(
    <ThemeProvider>
      <MovieProvider>
        <Header />
      </MovieProvider>
    </ThemeProvider>
  )
  const headerText = screen.getByText(/movie curator/i)
  expect(headerText).toBeInTheDocument()
})
