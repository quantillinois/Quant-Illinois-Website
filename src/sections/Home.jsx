import { useEffect, useRef } from 'react'

export default function Home() {
  const field = useRef(null)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let disposed = false
    let effect

    if (!motion.matches) {
      Promise.all([import('vanta/dist/vanta.trunk.min'), import('p5')]).then(([{ default: trunk }, { default: p5 }]) => {
        if (disposed || motion.matches) return

        effect = trunk({
          el: field.current,
          p5,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          color: 0x438cac,
          backgroundColor: 0xf7f5ef,
          spacing: 0.5,
          chaos: 4,
        })
      }).catch(() => {
        // The still contour artwork remains visible if the animation cannot load.
      })
    }

    function reduceMotion() {
      if (motion.matches) {
        effect?.destroy()
        effect = undefined
      }
    }

    motion.addEventListener('change', reduceMotion)
    return () => {
      disposed = true
      motion.removeEventListener('change', reduceMotion)
      effect?.destroy()
    }
  }, [])

  return (
    <section className="contour-hero" aria-labelledby="home-title">
      <div ref={field} className="contour-field" aria-hidden="true" />
      <div className="wrap contour-copy">
        <h1 id="home-title">
          We are <span>Quant</span> @ <em>Illinois</em>, a student-run quantitative finance and high frequency trading organization at the University of Illinois at Urbana-Champaign.
        </h1>
      </div>
    </section>
  )
}
