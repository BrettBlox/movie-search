import { debounce } from 'lodash'
import { Search } from 'components/search/search'

export const MovieList = () => {

  const handleInputChange = (e) => {
    e.persist()

    /**
     * Delays api call by 500ms to allow user to type more characters before making api request.
     * Using debounce method from lodash
     */
    const debouncedFn = debounce(() => {
      let searchString = e.target.value
      console.log(searchString)
    }, 500)
    debouncedFn()
  }

  return (
    <>
      <Search onChange={handleInputChange} />
    </>
  )
}
