import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Favourites from './pages/Favourites/Favourites'
import MovieCardPage from './pages/MovieCardPage/MovieCardPage'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<MovieCardPage/>}/>
            <Route path="/favourites" element={<Favourites/>}/>

          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
