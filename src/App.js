import { ThemeProvider } from 'context/theme-context'
import { MovieProvider } from 'context/movie-context'
import { Layout } from 'components/layout/layout'
import { MovieList } from 'components/movies-list/movies-list'

const App = () => (
  <ThemeProvider>
    <MovieProvider>
      <Layout>
        <MovieList />
      </Layout>
    </MovieProvider>
  </ThemeProvider>
)

export default App
