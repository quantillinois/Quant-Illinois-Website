import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import uiucCompetition from '../assets/uiuc-trading-competition.jpg'
import sportsDay from '../assets/sports-day-social.jpg'
import gameNights from '../assets/game-nights.jpg'
import paintballSocial from '../assets/paintball-social.jpg'
import weeklyMeetings from '../assets/weekly-meetings.jpg'
import citadelMysteryLeague from '../assets/citadel-mystery-league.jpg'
import eventPortrait from '../assets/quant-event-portrait.jpg'
import { forumRecap, instagram, optiverRecap } from '../assets/siteContent'

export default function Events({ preview = false }) {
  const Heading = preview ? 'h2' : 'h1'

  return (
    <section id="events" className="section events-board" aria-labelledby="events-title">
      <div className="wrap">
        <div className="events-heading">
          <Heading id="events-title" className="page-title">{preview ? 'Event Highlights' : 'Events'}</Heading>
          {preview ? (
            <Link className="text-link" to="/events">View all events <span aria-hidden="true">→</span></Link>
          ) : (
            <a className="events-instagram" href={instagram} aria-label="Quant at Illinois on Instagram">
              <BsInstagram aria-hidden="true" />
            </a>
          )}
        </div>
        <div className="event-pins">
          <article className="event-pin">
            <Link className="event-pin-art event-photo event-photo-uiuc" to="/trading-competition" aria-label="Explore the UIUC Trading Competition">
              <img src={uiucCompetition} alt="Four attendees wearing Mario Kart character hats at the UIUC Trading Competition" width="1200" height="800" loading="lazy" />
            </Link>
            <div className="event-pin-caption">
              <h3><Link to="/trading-competition">UIUC Trading Competition <span aria-hidden="true">↗</span></Link></h3>
              <p>Hosted in Champaign, IL, this two-day competition brings student teams together to develop strategies and compete in simulated markets.</p>
            </div>
          </article>
          {!preview && (
            <article className="event-pin">
              <a className="event-pin-art event-forum" href={forumRecap} aria-label="Read the Forum Intercollegiate Trading Competition recap">
                <span>FORUM INTERCOLLEGIATE · 2026</span>
                <strong>1st</strong>
                <span>CLUB FINISH</span>
              </a>
              <div className="event-pin-caption">
                <h3><a href={forumRecap}>Forum Intercollegiate Trading Competition <span aria-hidden="true">↗</span></a></h3>
                <p>Quant at Illinois took the top spot in the 2026 intercollegiate team rankings.</p>
              </div>
            </article>
          )}
          <article className="event-pin">
            <a className="event-pin-art event-photo event-photo-session" href={optiverRecap} aria-label="Read the Optiver info session recap on Instagram">
              <img src={eventPortrait} alt="Two attendees at the Optiver info session" width="666" height="1000" loading="lazy" />
            </a>
            <div className="event-pin-caption">
              <h3><a href={optiverRecap}>Info Sessions <span aria-hidden="true">↗</span></a></h3>
              <p>Our on-campus information sessions connect students with trading firm representatives to discuss industry practices and career paths in quantitative finance.</p>
            </div>
          </article>
          <article className="event-pin">
            <div className="event-pin-art event-photo event-photo-citadel">
              <img src={citadelMysteryLeague} alt="Four attendees posing below the Citadel Mystery League welcome slide" width="666" height="1000" loading="lazy" />
            </div>
            <div className="event-pin-caption">
              <h3>External Events</h3>
              <p>Citadel Mystery League Challenge, in partnership with Quant at Illinois.</p>
            </div>
          </article>
          {!preview && (
            <article className="event-pin">
              <div className="event-pin-art event-photo">
                <img src={sportsDay} alt="Quant members playing a lawn game at Sports Day" width="1200" height="675" loading="lazy" />
              </div>
              <div className="event-pin-caption">
                <h3>Sports Day Social</h3>
                <p>Quant members got together for outdoor games.</p>
              </div>
            </article>
          )}
          {!preview && (
            <article className="event-pin">
              <div className="event-pin-art event-photo">
                <img src={gameNights} alt="Quant members gathered around a Catan board at game night" width="1100" height="1100" loading="lazy" />
              </div>
              <div className="event-pin-caption">
                <h3>Game Nights</h3>
                <p>Members get together each week to play Catan, High Society, Liar’s Dice, and more.</p>
              </div>
            </article>
          )}
          <article className="event-pin">
            <div className="event-pin-art event-photo">
              <img src={paintballSocial} alt="Quant members posing in front of the Saltfork Paintball mural" width="1200" height="800" loading="lazy" />
            </div>
            <div className="event-pin-caption">
              <h3>Paintball Social</h3>
              <p>Quant members got together for a paintball outing at Saltfork Paintball.</p>
            </div>
          </article>
          <article className="event-pin">
            <div className="event-pin-art event-photo">
              <img src={weeklyMeetings} alt="Quant members gathered around tables at a weekly meeting" width="900" height="1200" loading="lazy" />
            </div>
            <div className="event-pin-caption">
              <h3>Weekly Meetings</h3>
              <p>Each week, we explore market microstructure, quantitative strategies, probability, and other topics in quantitative finance. We also play market-making games to put those ideas into practice.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
