import { useState } from 'react'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Leadership from './pages/Leadership'
import Placement from './pages/Placement'
import Sponsors from './pages/Sponsors'
import Divisions from './pages/Divisions'
import Footer from './components/Footer'

function App() {

  return (
    <div className='selection:bg-slate-300'>
      <Home />
      <Overview />
      <Leadership />
      <Divisions />
      <Placement />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App
