import React from 'react'
import Scoreboard from './pages/Scoreboard/Scoreboard'
import { Route, Routes } from 'react-router-dom'
import Leaderboard from './pages/Leaderboard/Leaderboard'


const App = () => {
  return (
    <div className='app mt-5'>
      <Routes>
        <Route exact path='/' element={<Scoreboard />} />
        <Route exact path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  )
}

export default App
