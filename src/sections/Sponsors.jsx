import imc from '../assets/companies/imc.png'
import deShaw from '../assets/companies/de-shaw.png'
import jane from '../assets/companies/jane.png'
import optiver from '../assets/companies/optiver.png'
import hrt from '../assets/companies/hrt.png'
import jump from '../assets/companies/jump.svg'
import omc from '../assets/companies/omc.png'
import sig from '../assets/companies/sig.png'
import akuna from '../assets/companies/akuna_capital.png'
import citadel from '../assets/companies/citadel.png'
import tower from '../assets/companies/tower.png'

const sponsorGroups = [
  ['Platinum', [
    ['Hudson River Trading', hrt, 'https://www.hudsonrivertrading.com/'],
    ['Optiver', optiver, 'https://optiver.com/'],
  ]],
  ['Gold', [
    ['IMC Trading', imc, 'https://www.imc.com/us/'],
    ['Jump Trading', jump, 'https://www.jumptrading.com/'],
    ['Citadel/Citadel Securities', citadel, 'https://www.citadel.com/'],
    ['Tower Research', tower, 'https://tower-research.com/'],
  ]],
  ['Silver', [
    ['D. E. Shaw', deShaw, 'https://www.deshaw.com/'],
    ['Jane Street', jane, 'https://www.janestreet.com/'],
  ]],
  ['Competition Sponsors', [
    ['Akuna Capital', akuna, 'https://www.akunacapital.com/'],
    ['OMC Markets', omc, 'https://www.oldmissioncapital.com/'],
    ['Susquehanna International Group', sig, 'https://www.sig.com/'],
  ]],
]

export default function Sponsors({ preview = false }) {
  const Heading = preview ? 'h2' : 'h1'
  const TierHeading = preview ? 'h3' : 'h2'

  return (
    <section id="sponsors" className="partners section" aria-labelledby="sponsors-title">
      <div className="wrap">
        <Heading id="sponsors-title" className="page-title sponsors-title">Our sponsors</Heading>
        {sponsorGroups.map(([tier, sponsors]) => (
          <div className="sponsor-row" key={tier}>
            <TierHeading className="sponsor-tier">{tier}</TierHeading>
            <ul className="sponsor-logos">
              {sponsors.map(([name, logo, href]) => (
                <li key={name}>
                  <a href={href}>
                    <img src={logo} alt={name} loading="lazy" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p id="sponsorship-contact" className="sponsors-contact">
          <span>Interested in becoming a sponsor?</span>
          <a href="mailto:corporate-outreach@quantillinois.com">corporate-outreach@quantillinois.com</a>
        </p>
      </div>
    </section>
  )
}
