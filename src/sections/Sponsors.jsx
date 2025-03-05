import imc from '../assets/companies/imc.png'
import drw from '../assets/companies/drw.png'
import jane from '../assets/companies/jane.png'
import peak6 from '../assets/companies/peak6.png'
import optiver from '../assets/companies/optiver.png'
import hrt from '../assets/companies/hrt.png'
import five from '../assets/companies/five.svg'

import tam from '../assets/companies/tam.webp'

export default function Sponsors() {
  return (
    <div className="h-auto py-8">
      <h1 className="text-center text-7xl mb-10 font-medium text-primary">Sponsors</h1>
      {/* <h2 className="text-center text-3xl font-medium">Platinum</h2> */}
      {/* <div className="flex justify-center gap-10 align-middle my-10"> */}
      <div className="flex bg-sky-100 justify-center py-10">
        <a href="https://www.imc.com/us/" className=''>
          <img src={imc} alt="IMC Trading" className='w-4/5 lg:w-2/3 object-contain mx-auto'/>
        </a>
      </div>
      {/* </div> */}
      {/* <h2 className="text-center text-3xl font-medium">Gold</h2> */}
      {/* <div className="flex justify-center gap-10 align-middle my-10"> */}
      <div className="flex bg-orange-200 justify-center py-10">
        <a href="https://www.drw.com/">
          <img src={drw} alt="DRW" className="w-4/5 lg:w-2/3 object-contain mx-auto"/>
        </a>
      </div>
      {/* </div> */}
      {/* <h2 className="text-center text-3xl font-medium">Silver</h2> */}
      <div className="grid grid-rows-2 grid-cols-3 lg:grid-cols-5 lg:grid-rows-1 justify-center gap-5 lg:gap-10 px-10 lg:px-24 py-10 bg-zinc-300">
        <a href="https://www.janestreet.com/" className="object-contain my-auto"><img src={jane} alt="Jane Street" /></a>
        <a href="https://www.hudsonrivertrading.com/" className="object-contain my-auto"><img src={hrt} alt="Hudson River Trading" /></a>
        <a href="https://fiverings.com/" className="object-contain my-auto"><img src={five} alt="Five Rings" /></a>
        <a href="https://optiver.com/" className="object-contain my-auto"><img src={optiver} alt="Optiver" /></a>
        <a href="https://peak6.com/" className="object-contain my-auto"><img src={peak6} alt="Peak6" /></a>
      </div>
      <h2 className="text-center text-md lg:text-xl font-medium mt-5">Interested in becoming a sponsor? Email us at <a className="text-secondary" href="mailto:corporate-outreach@quantillinois.com">corporate-outreach@quantillinois.com</a></h2>


      {/* <h1 className="text-center text-7xl mt-10 font-medium text-primary">Club Partners</h1>
      <div className="flex justify-center gap-10 align-middle">
        <a href="https://tradersatmichigan.com/" className="object-contain w-1/2"><img src={tam} alt="Traders at Michigan" /></a>
      </div> */}
    </div>
  )
}