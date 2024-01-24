import imc from '../assets/companies/imc.png'
import drw from '../assets/companies/drw.png'
import citadel from '../assets/companies/citadel.png'
import jump from '../assets/companies/jump.png'

export default function Sponsors() {
  return (
    <div className="h-auto py-8 w-2/3 mx-auto">
      <h1 className="text-center text-7xl mb-10 font-medium text-primary">Sponsors</h1>
      <div className="flex justify-center gap-10 align-middle my-20">
        <a href="https://www.imc.com/us/" className="w-1/2 object-contain my-auto"><img src={imc} alt="IMC Trading" /></a>
        <a href="https://www.citadel.com/" className="w-1/2 object-contain my-auto"><img src={citadel} alt="Citadel" /></a>
      </div>
      <div className="flex justify-center gap-10 align-middle my-20">
        <a href="https://www.drw.com/" className="w-1/2 object-contain my-auto"><img src={drw} alt="DRW" /></a>
        <a href="https://www.jumptrading.com/" className="w-1/2 object-contain my-auto flex justify-center"><img src={jump} alt="Jump Trading" /></a>
      </div>
      <h2 className="text-center text-xl font-medium">Interested in sponsoring us? Email us at <a className="text-secondary" href="mailto:corporate-outreach@quantillinois.com">corporate-outreach@quantillinois.com</a></h2>


      <h1 className="text-center text-7xl my-10 font-medium text-primary">Club Partners</h1>
      <div className="flex justify-center gap-10 align-middle my-20">
        <a href="" className="w-1/2 object-contain my-auto"><img src="src/assets/companies/tam.webp" alt="IMC Trading" /></a>
      </div>
    </div>
  )
}