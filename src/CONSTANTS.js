if (!process.env.REACT_APP_MOVIE_API_BASE_ENDPOINT) {
  throw new Error(
    'MovieDB API base endpoint must be set in ENV vars! (REACT_APP_MOVIE_API_BASE_ENDPOINT)'
  )
}

if (!process.env.REACT_APP_MOVIE_API_KEY) {
  throw new Error(
    'MovieDB API key must be set in ENV vars! (REACT_APP_MOVIE_API_KEY)'
  )
}

if (!process.env.REACT_APP_MOVIE_API_SEARCH_ENDPOINT) {
  throw new Error(
    'MovieDB API search endpoint must be set in ENV vars! (REACT_APP_MOVIE_API_SEARCH_ENDPOINT)'
  )
}

if (!process.env.REACT_APP_MOVIE_API_DISCOVER_ENDPOINT) {
  throw new Error(
    'MovieDB API discover endpoint must be set in ENV vars! (REACT_APP_MOVIE_API_DISCOVER_ENDPOINT)'
  )
}

if (!process.env.REACT_APP_MOVIE_API_POSTER_BASE_URL) {
  throw new Error(
    'MovieDB poster base URL must be set in ENV vars! (REACT_APP_MOVIE_API_POSTER_BASE_URL)'
  )
}

export const MOVIE_API_API_BASE_ENDPOINT =
  process.env.REACT_APP_MOVIE_API_BASE_ENDPOINT

export const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY

export const MOVIE_SEARCH_ENDPOINT =
  process.env.REACT_APP_MOVIE_API_SEARCH_ENDPOINT

export const MOVIE_DISCOVER_ENDPOINT =
  process.env.REACT_APP_MOVIE_API_DISCOVER_ENDPOINT

export const MOVIE_POSTER_BASE_URL =
  process.env.REACT_APP_MOVIE_API_POSTER_BASE_URL
