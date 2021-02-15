import { ThemeProvider } from 'context/theme-context'
import { MovieProvider } from 'context/movie-context'
import { Layout } from 'components/layout/layout'

const App = () => (
  <ThemeProvider>
    <MovieProvider>
      <Layout>MOVIES LIST</Layout>
    </MovieProvider>
  </ThemeProvider>
)

export default App
