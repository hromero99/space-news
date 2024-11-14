
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewsPage } from './pages/newsPage'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App
