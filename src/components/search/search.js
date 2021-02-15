import styled from 'styled-components'
import { useTheme } from 'context/theme-context'

export const Search = ({ onChange }) => {
  const { colors } = useTheme()

  return (
    <SearchStyles colors={colors}>
      <div>
        <label htmlFor='movie-search'>Search Movies</label>
        <input
          id='movie-search'
          type='text'
          placeholder='Start typing...'
          onChange={onChange}
        />
      </div>
    </SearchStyles>
  )
}

const SearchStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  margin: 2rem auto;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 25em;
    width: 100%;
  }

  label {
    color: ${({ colors }) => colors.white};
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  input {
    color: ${({ colors }) => colors.grayDark};
    background: ${({ colors }) => colors.white};
    font-size: 0.875rem;
    padding: 0.8rem;
    border: none;
    margin: 0;
    font: inherit;
    line-height: 1;
    padding: 0.8rem;
    outline-offset: -1px;
    width: 100%;
  }
`

export default Search
