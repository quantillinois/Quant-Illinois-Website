import imc from '../assets/sponsors/imc.png'
import drw from '../assets/sponsors/drw.png'
import citadel from '../assets/sponsors/citadel.png'
import jump from '../assets/sponsors/jump.png'

export default function Sponsors() {
  return (
    <div className="h-screen py-16 w-2/3 mx-auto">
      <h1 className="text-center text-7xl mb-10 font-medium text-primary">Sponsors</h1>
      <div className="flex justify-center gap-10 h-2/5 align-middle">
        <a href="https://www.imc.com/us/" className="w-1/2 object-contain my-auto"><img src={imc} alt="IMC Trading" /></a>
        <a href="https://www.citadel.com/" className="w-1/2 object-contain my-auto"><img src={citadel} alt="Citadel" /></a>
      </div>
      <div className="flex justify-center gap-10 h-2/5 align-middle">
        <a href="https://www.drw.com/" className="w-1/2 object-contain my-auto"><img src={drw} alt="DRW" /></a>
        <a href="https://www.jumptrading.com/" className="w-1/2 object-contain my-auto flex justify-center"><img src={jump} alt="Jump Trading" /></a>
      </div>
    </div>
  )
}