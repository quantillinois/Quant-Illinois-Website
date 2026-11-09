import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import Footer from './components/Footer'

export default function App() {
  const { pathname } = useLocation()

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader home={pathname === '/'} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
