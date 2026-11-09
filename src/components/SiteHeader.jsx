import { Link } from 'react-router-dom'
import { BsDiscord, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { discord, instagram, linkedin } from '../assets/siteContent'
import logo from '../assets/full-logo.png'

export default function SiteHeader({ home = false }) {
  return (
    <header className={home ? "site-header home-header" : "site-header"} id="top">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Quant at Illinois home">
          <img src={logo} alt="" width="1876" height="478" />
        </Link>
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/trading-competition">Competition</Link>
          <Link to="/members">Members</Link>
          <Link to="/sponsors">Sponsors</Link>
        </nav>
        <nav className="nav-socials" aria-label="Social links">
          <a href={discord} aria-label="Quant Discord"><BsDiscord aria-hidden="true" /></a>
          <a href={instagram} aria-label="Quant Instagram"><BsInstagram aria-hidden="true" /></a>
          <a href={linkedin} aria-label="Quant LinkedIn"><BsLinkedin aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  )
}
