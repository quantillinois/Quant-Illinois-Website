import { Link } from 'react-router-dom'
import competitionPhoto from '../assets/uiuc-trading-competition.jpg'
import { instagram } from '../assets/siteContent'

const cases = [
  ['Estimation markets', 'Price outcomes from competitive games such as GeoGuessr.'],
  ['Grid navigation', 'Trade directional tokens to navigate a grid.'],
  ['Card markets', 'Work out how a custom scoring system changes the value of each card.'],
  ['Marble racing', 'Trade predictions on how a race will finish.'],
]

export default function TradingCompetitionPage() {
  return (
    <>
    <section className="hero event-hero" aria-labelledby="event-title">
      <div className="wrap">
        <Link className="text-link back-link" to="/">← Back to Quant</Link>
        <p className="eyebrow"><span className="signal-dot" /> SIGNATURE EVENT / CHAMPAIGN, IL</p>
        <h1 id="event-title">UIUC Trading<br /><em>Competition.</em></h1>
        <p className="intro">Hosted in Champaign, IL, this two-day competition brings student teams together to develop strategies and compete in simulated markets.</p>
        <div className="actions">
          <a className="button button-dark" href="#competition-cases">Explore the cases <span aria-hidden="true">↓</span></a>
          <a className="text-link" href={instagram}>Follow for event updates <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
    <section id="competition-cases" className="section wrap" aria-labelledby="cases-title">
      <p className="eyebrow">2026 / SECOND ANNUAL COMPETITION</p>
      <div className="section-intro">
        <h2 id="cases-title">Four ways to trade.</h2>
        <p>At the 2026 competition, 80 students traded across four cases. Teams placed more than 200,000 simulated trades across 18 markets.</p>
      </div>
      <ol className="case-list">
        {cases.map(([title, description], index) => (
          <li key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
        ))}
      </ol>
      <figure className="competition-photo">
        <img src={competitionPhoto} alt="Attendees wearing Mario Kart character hats at the UIUC Trading Competition" width="1200" height="800" loading="lazy" />
        <figcaption>UIUC Trading Competition, 2026</figcaption>
      </figure>
    </section>
    </>
  )
}
