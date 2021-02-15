import styled from 'styled-components'
import { Header } from './header/header'
import { useTheme } from 'context/theme-context'

export const Layout = ({ children }) => {
  const { screens, breakpoints, colors } = useTheme()
  return (
    <BodyStyles colors={colors}>
      <LayoutStyles colors={colors} screens={screens} breakpoints={breakpoints}>
        <Header />
        <main>{children}</main>
      </LayoutStyles>
    </BodyStyles>
  )
}

const BodyStyles = styled.div`
  background: ${({ colors }) => colors.grayDark};
`

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  @media ${({ breakpoints }) => breakpoints.md} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${({ breakpoints }) => breakpoints.xl} {
    max-width: ${({ screens }) => screens.xl};
    padding-left: 0;
    padding-right: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: 8rem;
  }
`
