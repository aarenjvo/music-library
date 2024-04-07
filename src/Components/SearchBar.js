import { useContext } from 'react'
import { SearchContext } from '../Context/SearchContext'

function SearchBar() {
    // let [searchTerm, setSearchTerm] = useState('')
    const { term, handleSearch } = useContext(SearchContext)

    return (
        // <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
        /* <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Enter a search term here" ref={term} /> */
        /* <input type="submit" /> */
        <form>
            <input ref={term} type="text" placeholder="Enter a search term here" />
            <button onClick={ (e) => handleSearch(e, term.current.value) }>Submit</button>
        </form>
    )
}

export default SearchBar