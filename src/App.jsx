import { useState } from 'react'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Sponsors from './pages/Sponsors'

function App() {

  return (
    <div className='selection:bg-slate-300'>
      <Home />
      <Overview />
      <Sponsors />
    </div>
  )
}

export default App
