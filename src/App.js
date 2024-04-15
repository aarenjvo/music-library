import { useState, useEffect, Suspense, useRef, Fragment, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBar from './Components/SearchBar'
import { DataContext } from './Context/DataContext'
import { SearchContext } from './Context/SearchContext'
import ArtistView from './Components/ArtistView'
import AlbumView from './Components/AlbumView'
import { createResource as fetchTheData } from './helper'
import Spinner from './Components/Spinner'
import './App.css'

function App() {

  let searchInput = useRef('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm) {
      setData(fetchTheData(searchTerm))
    }
  }, [searchTerm])


  const handleSearch = async (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(`https://itunes.apple.com/search?term=${term}`)
      const resData = await response.json()
      console.log(resData)

      if (resData.results.length > 0) {
        return setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
  }

  const Gallery = lazy(() => import('./Components/Gallery'))

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
  } 
  // return (
  //   <div>
  //   <Spinner />
  //   Testing if Spinner component render
  //   </div>
  // )
}

  return (
    <div className='App'>
      {message}
      <Router>
        <Routes>
          <Route exact path='/' element={
            <Fragment>
              <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
              }}>
                <SearchBar handleSearch={handleSearch}/>
              </SearchContext.Provider>
              <DataContext.Provider value={data}>
              {renderGallery()}
              </DataContext.Provider>     
            </Fragment>
          } />
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/artist/:id' element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
