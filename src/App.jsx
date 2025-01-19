import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Favourites from './pages/Favourites/Favourites'
import MovieCardPage from './pages/MovieCardPage/MovieCardPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <main className='main'>
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
