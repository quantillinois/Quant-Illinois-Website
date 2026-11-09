import { BsDiscord, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { discord, instagram, linkedin } from '../assets/siteContent'
import logo from '../assets/full-logo.png'

const socials = [
  ['Instagram', instagram, BsInstagram],
  ['Discord', discord, BsDiscord],
  ['LinkedIn', linkedin, BsLinkedin],
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <img src={logo} alt="Quant at Illinois" width="1876" height="478" />
          <p>University of Illinois Urbana-Champaign</p>
        </div>
        <nav aria-label="Social media">
          {socials.map(([name, href, Icon]) => (
            <a href={href} key={name} aria-label={name}><Icon aria-hidden="true" /></a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
