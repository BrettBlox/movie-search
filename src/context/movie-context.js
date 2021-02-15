import { useState, useEffect, createContext, useContext } from 'react'

import { MOVIE_SEARCH_ENDPOINT } from 'CONSTANTS'

const MovieContext = createContext()


/**
 * @todo add in loading and error states 
 */
const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  // initialize with first page of search results
  const [currentPage, setCurrentPage] = useState(1)
  // used in pagination
  const [totalPages, setTotalPages] = useState(null)

  // fetch movies from search endpoint
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetch(
          `${MOVIE_SEARCH_ENDPOINT}/&query=${query}&page=${currentPage}`
        )
        const { results, total_pages, page } = await data.json()

        setMovies(results)
        setTotalPages(total_pages)
        setCurrentPage(page)
      } catch (error) {
        /**
         * @todo better error handling/logging
         */
        console.error(error)
      }
    }

    fetchMovies()
  }, [query, currentPage, totalPages])

  const value = {
    movies,
    query,
    setQuery,
    currentPage,
    setCurrentPage,
    totalPages,
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}

/**
 * Export context as custom hook
 * Slightly more terse with an an informative error message should
 * your component not have it's associated provider higher up the tree
 */
const useMovie = () => {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error('Movie context must be used inside MovieProvider!')
  }
  return context
}

export { MovieProvider, useMovie }
