import { useReducer, useState } from 'react'

import './App.css'
import { NewsContext,newsReducer } from './context/newsContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewsPage } from './pages/newsPage'
import { ImagesContext } from './context/imagesContext'

function App() {


  const [state, dispatch] = useReducer(newsReducer, []);


  return (
    <NewsContext.Provider value={{newsState: state,newsDispatch: dispatch}}>
      <ImagesContext.Provider value={[]}>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </ImagesContext.Provider>
    </NewsContext.Provider>
  )
}

export default App
