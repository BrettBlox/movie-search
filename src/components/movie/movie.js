import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MOVIE_POSTER_BASE_URL } from 'CONSTANTS'
import { useTheme } from 'context/theme-context'

export const Movie = ({ movie }) => {
  const [releaseDate, setReleaseDate] = useState()
  const [showDescription, setShowDescription] = useState(false)
  const { colors, breakpoints, TextStyles, ButtonStyles } = useTheme()
  const { poster_path, title, release_date, vote_average, overview } = movie

  /**
   * Turn the release date into [month]/[day]/[year] format
   */
  useEffect(() => {
    if (release_date) {
      const dateArr = release_date.split('-')
      const formattedReleaseDate = `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`
      setReleaseDate(formattedReleaseDate)
    }
  }, [release_date])

  return (
    <MovieStyles breakpoints={breakpoints} colors={colors}>
      {showDescription ? (
        <div className='movie-description'>
          <TextStyles>{overview}</TextStyles>
        </div>
      ) : (
        <>
          <img
            src={
              poster_path
                ? `${MOVIE_POSTER_BASE_URL}${poster_path}`
                : 'https://critics.io/img/movies/poster-placeholder.png'
            }
            alt={
              poster_path
                ? `${title} poster`
                : `Placeholder poster for ${title}`
            }
          />
          <div className='movie-info'>
            <h3>
              <TextStyles
                fontSize='1.25rem'
                textTransform='uppercase'
                textAlign='center'>
                {title}
              </TextStyles>
            </h3>
            {vote_average ? (
              <p>
                <TextStyles
                  fontSize='.75rem'
                  fontWeight='bold'
                  textTransform='uppercase'
                  textAlign='center'>
                  Rating: {vote_average} / 10
                </TextStyles>
              </p>
            ) : (
              <></>
            )}
            {release_date ? (
              <p>
                <TextStyles
                  fontSize='.75rem'
                  fontWeight='bold'
                  textTransform='uppercase'
                  textAlign='center'>
                  Release Date: {releaseDate}
                </TextStyles>
              </p>
            ) : <></>}
          </div>
        </>
      )}
      {overview && (
        <ButtonStyles
          className='overview-toggle'
          onClick={() => setShowDescription((prevState) => !prevState)}>
          {showDescription ? 'Hide Description' : 'Read Description'}
        </ButtonStyles>
      )}
    </MovieStyles>
  )
}

const MovieStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-height: 600px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 10px 15px -3px ${({ colors }) => colors.shadowLight},
    0 4px 6px -2px ${({ colors }) => colors.shadowLight};
  transition: all 0.25s ease;
  border-radius: 4px;
  overflow: hidden;

  @media only screen and ${({ breakpoints }) => breakpoints.lg} {
    box-shadow: 0 4px 6px -1px ${({ colors }) => colors.shadowLight},
      0 2px 4px -1px ${({ colors }) => colors.shadowLight};
    &:hover {
      box-shadow: 0 10px 15px -3px ${({ colors }) => colors.shadowLight},
        0 4px 6px -2px ${({ colors }) => colors.shadowLight};
      transform: translateY(-3px) scale(1.01);
    }
  }

  img {
    max-height: 423px;
    height: 423px;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 1rem;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem;
  }

  .movie-description {
    padding: 1rem;
    margin: auto;
    flex: 1;

    display: flex;
    align-items: center;
  }

  .overview-toggle {
    margin: 1rem;
    margin-top: auto;
  }
`
