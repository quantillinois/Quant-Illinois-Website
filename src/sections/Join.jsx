import { discord, instagram } from '../assets/siteContent'
import mark from '../assets/quantfavicon.png'

export default function Join() {
  return (
    <section id="join" className="section wrap" aria-labelledby="join-title">
      <div className="join-panel">
        <div>
          <p className="eyebrow">05 / GET INVOLVED</p>
          <h1 id="join-title" className="page-title">Meet Quant.</h1>
          <p>Thinking about joining? Check Discord for application announcements and info sessions. Follow us on Instagram for event recaps and a look at life in the club.</p>
          <div className="actions">
            <a className="button button-dark" href={discord}>Join the Discord <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={instagram}>Follow @quantillinois <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <img src={mark} alt="" width="200" height="200" loading="lazy" />
      </div>
    </section>
  )
}
