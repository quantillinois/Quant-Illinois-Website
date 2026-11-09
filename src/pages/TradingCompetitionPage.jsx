import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import competitionRoom from '../assets/competition-room.jpg'
import competitionLaptops from '../assets/competition-laptops.jpg'
import competitionDiscussion from '../assets/competition-discussion.jpg'
import competitionPaperPlane from '../assets/competition-paper-plane.jpg'
import competitionNotes from '../assets/competition-notes.jpg'
import competitionMarioKart from '../assets/uiuc-trading-competition.jpg'
import { instagram } from '../assets/siteContent'

const photos = [
  { src: competitionRoom, alt: 'Teams seated beneath a projected Quant logo' },
  { src: competitionLaptops, alt: 'Competitors working together on laptops' },
  { src: competitionDiscussion, alt: 'Students talking with Mario Kart projected behind them' },
  { src: competitionPaperPlane, alt: 'A competitor holding a folded paper airplane beside a laptop' },
  { src: competitionMarioKart, alt: 'Attendees wearing Mario Kart character hats' },
  { src: competitionNotes, alt: 'Competitors taking notes alongside their laptops' },
]

export default function TradingCompetitionPage() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const dragStart = useRef(null)
  const photo = photos[photoIndex]

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const timer = window.setInterval(() => {
      if (!reducedMotion.matches && !dragStart.current) {
        setPhotoIndex(index => (index + 1) % photos.length)
      }
    }, 8000)

    return () => window.clearInterval(timer)
  }, [photoIndex])

  function startDrag(event) {
    if (!event.isPrimary || event.button !== 0) return

    dragStart.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function finishDrag(event) {
    if (!event.isPrimary || !dragStart.current) return

    const xDistance = event.clientX - dragStart.current.x
    const yDistance = event.clientY - dragStart.current.y
    dragStart.current = null

    if (Math.abs(xDistance) < 40 || Math.abs(xDistance) <= Math.abs(yDistance)) return

    const direction = xDistance < 0 ? 1 : -1
    setPhotoIndex(index => (index + direction + photos.length) % photos.length)
  }

  return (
    <section className="section wrap competition-page" aria-labelledby="event-title">
      <Link className="text-link competition-back" to="/events">← All events</Link>
      <div className="competition-layout">
        <div>
          <h1 id="event-title" className="page-title">UIUC Trading Competition</h1>
          <p className="competition-intro">Over two days in Champaign, IL, teams compete for a <strong>$10,000+</strong> prize pool in simulated markets built around games, estimation, and prediction. Competitors also have time to meet representatives from sponsoring firms.</p>
          <a className="text-link competition-updates" href={instagram}>Follow for event updates <span aria-hidden="true">↗</span></a>
        </div>
        <figure className="competition-photo" aria-label="UIUC Trading Competition photos">
          <img
            className="competition-slide"
            src={photo.src}
            alt={photo.alt}
            draggable={false}
            onPointerDown={startDrag}
            onPointerUp={finishDrag}
            onLostPointerCapture={() => { dragStart.current = null }}
          />
          <figcaption className="competition-thumbnails" role="group" aria-label="Choose a competition photo">
            {photos.map(({ src, alt }, index) => (
              <button
                key={src}
                type="button"
                aria-label={alt}
                aria-current={index === photoIndex ? 'true' : undefined}
                onClick={() => setPhotoIndex(index)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
