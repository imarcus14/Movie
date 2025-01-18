import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MovieCardPage from './pages/MovieCardPage/MovieCardPage'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieCardPage movie={{title: "Ivan's Movie", release_date: "2024" }}/>}/>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
