import styled from 'styled-components'
import { debounce } from 'lodash'
import { useMovie } from 'context/movie-context'
import { Search } from 'components/search/search'
import { Movie } from 'components/movie/movie'

export const MovieList = () => {
  const { movies, totalPages, setQuery } = useMovie()

  const handleInputChange = (e) => {
    e.persist()

    /**
     * Delays api call by 500ms to allow user to type more characters before making api request.
     * Using debounce method from lodash
     */
    const debouncedFn = debounce(() => {
      let searchString = e.target.value
      setQuery(searchString)
    }, 500)
    debouncedFn()
  }

  return (
    <>
      <Search onChange={handleInputChange} />
      {movies && totalPages > 0 && (
        <MovieGridStyles>
          {movies.map((movie, i) => (
            <Movie movie={movie} />
          ))}
        </MovieGridStyles>
      )}
    </>
  )
}

const MovieGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`
