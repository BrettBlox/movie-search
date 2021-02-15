import styled from 'styled-components'
import { debounce } from 'lodash'
import { useTheme } from 'context/theme-context'
import { useMovie } from 'context/movie-context'
import { Search } from 'components/search/search'
import { Pagination } from 'components/pagination/pagination'
import { Movie } from 'components/movie/movie'

/**
 * Grid of individual movie cards for displaying results returned from search query
 */
export const MovieList = () => {
  const { TextStyles } = useTheme()
  const { movies, totalPages, query, setQuery, setCurrentPage } = useMovie()

  const handleInputChange = (e) => {
    e.persist()

    /**
     * Set current page back to 1 when search query is updated
     */
    setCurrentPage(1)

    /**
     * Delays api call by 500ms to allow user to type more characters before making api request.
     * Using debounce method from lodash
     *
     * This should be improved but was the quickest solution I could come up with for this idea.
     */
    const debouncedFn = debounce(() => {
      let searchString = e.target.value
      setQuery(searchString)
    }, 500)
    debouncedFn()
  }

  /**
   * Check if input field is empty
   * If input not empty and resutls were returned, display movies grid
   * If no movies returned from query, alert user that their search was unsuccessful
   */
  const moviesGrid =
    query === '' ? (
      <TextStyles textAlign='center'>
        Start typing to search for movies...
      </TextStyles>
    ) : movies && totalPages > 0 ? (
      <MovieGridStyles>
        {movies.map((movie, i) => (
          <Movie movie={movie} key={`movie-${i}`} />
        ))}
      </MovieGridStyles>
    ) : (
      <TextStyles textAlign='center'>
        No movies found. Try something else...
      </TextStyles>
    )

  return (
    <>
      <Search onChange={handleInputChange} />
      {movies && <Pagination />}
      {moviesGrid}
    </>
  )
}

const MovieGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`
