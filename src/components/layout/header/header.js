import styled from 'styled-components'
import { useTheme } from 'context/theme-context'

export const Header = () => {
  const { colors } = useTheme()
  return (
    <HeaderStyles colors={colors}>
      <h1>Movie Curator</h1>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  h1 {
    color: ${({ colors }) => colors.white};
    font-size: 2.5rem;
  }
`
