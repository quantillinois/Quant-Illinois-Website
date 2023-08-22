import { useState } from 'react'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Sponsors from './pages/Sponsors'
import Divisions from './pages/Divisions'

function App() {

  return (
    <div className='selection:bg-slate-300'>
      <Home />
      <Overview />
      <Divisions />
      <Sponsors />
    </div>
  )
}

export default App
