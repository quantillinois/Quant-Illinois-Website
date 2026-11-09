import { teamData } from '../assets/teamData'

const divisions = [
  {
    title: 'Trading',
    description: 'Trading members explore quantitative strategies and apply probability through problem-solving exercises. Market-making simulations provide practice in evaluating trade-offs between expected return and risk.',
  },
  {
    title: 'Software',
    description: 'The Software division studies the infrastructure behind high-frequency trading, including CME’s iLink protocol, millimeter-wave networks, and co-located FPGA systems.',
    activities: [
      'Study market microstructure by building and analyzing trading systems.',
      'Develop infrastructure for testing trading strategies.',
      'Use code profiling and multithreading to improve performance.',
    ],
  },
]

export default function Divisions({ collapsible = false }) {
  const Division = collapsible ? 'details' : 'article'

  return (
    <section id="divisions" className="divisions-band" aria-labelledby="divisions-title">
      <div className="divisions-heading">
        <div className="wrap">
          <h2 id="divisions-title">Divisions</h2>
          <p className="division-intro">
            Quant gives students a way to explore careers in quantitative finance while learning how markets and trading systems work. <a href="#division-trading">Trading</a> and <a href="#division-software">Software</a> meet separately each week, and the full club gets together for socials, info sessions, and office visits.
          </p>
        </div>
      </div>
      <div className="section wrap">
        <div className="division-list">
          {divisions.map(({ title, description, activities }, index) => {
            const { teamLeader, teamMembers, applicationStatus, formLink } = teamData[index]
            return (
              <Division className="division" key={title}>
                {collapsible && <summary className="division-toggle">{title}</summary>}
                <div className="division-body" id={`division-${title.toLowerCase()}`}>
                  <div className="division-description">
                    {!collapsible && <h3>{title}</h3>}
                    <p>{description}</p>
                    {activities && (
                      <ul className="division-activities">
                        {activities.map((activity) => <li key={activity}>{activity}</li>)}
                      </ul>
                    )}
                    {applicationStatus && <a className="text-link division-apply" href={formLink}>Apply to {title} <span aria-hidden="true">↗</span></a>}
                  </div>
                  <div className="division-roster">
                    <h4>Team roster</h4>
                    <ul>
                      {teamLeader.map((name) => <li key={name}><strong>{name}</strong></li>)}
                      {teamMembers.map((name) => <li key={name}>{name}</li>)}
                    </ul>
                    <p className="roster-note"><strong>Bold</strong> indicates executive members.</p>
                  </div>
                </div>
              </Division>
            )
          })}
        </div>
      </div>
    </section>
  )
}
