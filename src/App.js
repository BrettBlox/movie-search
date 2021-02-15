import { ThemeProvider } from 'context/theme-context'
import { Layout } from 'components/layout/layout'

const App = () => (
  <ThemeProvider>
    <Layout>BODY STUFF HERE</Layout>
  </ThemeProvider>
)

export default App
