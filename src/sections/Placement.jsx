import imc from '../assets/companies/imc.png'
import citadel from '../assets/companies/citadel.png'
import jump from '../assets/companies/jump.svg'
import optiver from '../assets/companies/optiver.png'
import akuna from '../assets/companies/akuna_capital.png'
import millenium from '../assets/companies/millenium.png'
import peak6 from '../assets/companies/peak6.png'
import jane from '../assets/companies/jane.png'
import sig from '../assets/companies/sig.png'
import hrt from '../assets/companies/hrt.png'
import google from '../assets/companies/google.png'
import meta from '../assets/companies/meta.png'
import amazon from '../assets/companies/amazon.png'
import drw from '../assets/companies/drw.png'
import apple from '../assets/companies/apple.png'
import virtu from '../assets/companies/virtu.svg'
import stripe from '../assets/companies/stripe.png'
import ctc from '../assets/companies/ctc.png'
import anthropic from '../assets/companies/anthropic.svg'
import etched from '../assets/companies/etched.svg'

const employers = [
  ['Jane Street', jane, 'employer-logo-tall'],
  ['Hudson River Trading', hrt],
  ['Citadel', citadel],
  ['Jump Trading', jump, 'employer-logo-tall'],
  ['Optiver', optiver],
  ['Anthropic', anthropic],
  ['Etched', etched],
  ['Susquehanna International Group', sig],
  ['IMC Trading', imc],
  ['DRW', drw, 'employer-logo-compact'],
  ['Millennium', millenium],
  ['PEAK6', peak6],
  ['Akuna Capital', akuna],
  ['Virtu Financial', virtu],
  ['Chicago Trading Company', ctc],
  ['Google', google],
  ['Apple', apple],
  ['Stripe', stripe, 'employer-logo-compact'],
  ['Meta', meta, 'employer-logo-compact'],
  ['Amazon', amazon, 'employer-logo-compact employer-logo-amazon'],
]

export default function Placement() {
  return (
    <section className="partners section placement" aria-labelledby="placement-title">
      <div className="wrap">
        <h1 id="placement-title" className="page-title sponsors-title">Where we work</h1>
        <ul className="sponsor-logos">
          {employers.map(([name, logo, sizeClass]) => (
            <li key={name}>
              {name === 'Etched' ? (
                <span className="employer-lockup">
                  <img src={logo} alt="" loading="lazy" />
                  <span>Etched</span>
                </span>
              ) : (
                <img className={sizeClass} src={logo} alt={name} loading="lazy" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
