import imc from '../assets/sponsors/imc.png'
import drw from '../assets/sponsors/drw.png'
import citadel from '../assets/sponsors/citadel.png'
import jump from '../assets/sponsors/jump.png'

export default function Sponsors() {
  return (
    <div className="h-screen py-20 w-2/3 mx-auto">
      <h1 className="text-center text-7xl mb-10 font-medium">Sponsors</h1>
      <div className="flex justify-center gap-10 h-1/3 align-middle">
        <img src={imc} alt="Sponsors" className="w-1/2 object-contain"/>
        <img src={citadel} alt="Sponsors" className="w-1/2 object-contain"/>
      </div>
      <div className="flex justify-center gap-10 h-1/3 align-middle">
        <img src={drw} alt="Sponsors" className="w-1/2 object-contain"/>
        <img src={jump} alt="Sponsors" className="w-1/2 object-contain"/>
      </div>
    </div>
  )
}