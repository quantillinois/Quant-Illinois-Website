import { useState } from 'react'
import Home from './sections/Home'
import Overview from './sections/Overview'
import Leadership from './sections/Leadership'
import Events from './sections/Events'
import Placement from './sections/Placement'
import Sponsors from './sections/Sponsors'
import Divisions from './sections/Divisions'
import Footer from './components/Footer'

function App() {

  return (
    <div className='selection:bg-slate-300'>
      <Home />
      <Overview />
      <Leadership />
      <Events />
      <Divisions />
      <Placement />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App
