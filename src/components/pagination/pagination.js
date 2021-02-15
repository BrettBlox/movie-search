import styled from 'styled-components'
import { useMovie } from 'context/movie-context'
import { useTheme } from 'context/theme-context'

/**
 * Next and previous buttons for requesting next page in list of results
 *
 * I was taking to long to implement infinite scroll and this was a quicker
 * solution for similar functionality.
 *
 */
export const Pagination = () => {
  const { movies, currentPage, setCurrentPage, totalPages } = useMovie()
  const { colors, ButtonStyles } = useTheme()

  const handlePrevious = () => {
    if (movies && currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1)
    }
  }

  const handleNext = () => {
    if (movies && currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1)
    }
  }

  return (
    <PaginationStyles colors={colors}>
      <ButtonStyles
        className='prev-button'
        onClick={handlePrevious}
        disabled={currentPage === 1}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          focusable='false'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M11.293 5.707L16.586 11H5a1 1 0 000 2h11.586l-5.293 5.293a.999.999 0 101.414 1.414l7-7a1.006 1.006 0 000-1.414l-7-7a.999.999 0 10-1.414 1.414z'
          />
        </svg>{' '}
        Previous Page
      </ButtonStyles>
      <ButtonStyles
        className='next-button'
        onClick={handleNext}
        disabled={totalPages === 0 || currentPage === totalPages}>
        Next Page{' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          focusable='false'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M11.293 5.707L16.586 11H5a1 1 0 000 2h11.586l-5.293 5.293a.999.999 0 101.414 1.414l7-7a1.006 1.006 0 000-1.414l-7-7a.999.999 0 10-1.414 1.414z'
          />
        </svg>
      </ButtonStyles>
    </PaginationStyles>
  )
}

const PaginationStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  button.prev-button svg {
    transform: rotate(180deg);
  }
`
