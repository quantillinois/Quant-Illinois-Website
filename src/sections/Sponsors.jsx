import imc from '../assets/companies/imc.png'
import drw from '../assets/companies/drw.png'
import jane from '../assets/companies/jane.png'
import peak6 from '../assets/companies/peak6.png'
import optiver from '../assets/companies/optiver.png'
import hrt from '../assets/companies/hrt.png'
import five from '../assets/companies/five.svg'
import jump from '../assets/companies/jump.svg'
import omc from '../assets/companies/omc.png'
import sig from '../assets/companies/sig.png'
import belvedere from '../assets/companies/belvedere.png'


export default function Sponsors() {
  return (
    <div className="h-auto py-8">
      <h1 className="text-center text-7xl mb-10 font-medium text-primary">Sponsors</h1>
      
      <div className="bg-sky-100 py-10 mx-5 lg:mx-20 rounded-lg">
        <h2 className="text-left text-5xl font-medium text-sky-700 pl-10">Platinum</h2>
        <div className="flex justify-center py-10">
          <a href="https://www.imc.com/us/" className=''>
            <img src={imc} alt="IMC Trading" className='w-4/5 lg:w-2/3 object-contain mx-auto'/>
          </a>
        </div>
      </div>
      
      <div className="bg-orange-200 py-10 mx-5 lg:mx-20 mt-10 rounded-lg">
        <h2 className="text-left text-5xl font-medium text-orange-700 pl-10">Gold</h2>
        <div className="flex justify-center py-10">
          <a href="https://www.drw.com/">
            <img src={drw} alt="DRW" className="w-4/5 lg:w-2/3 object-contain mx-auto"/>
          </a>
        </div>
      </div>
      
      <div className="bg-zinc-300 py-10 mx-5 lg:mx-20 mt-10 rounded-lg">
        <h2 className="text-left text-5xl font-medium text-zinc-700 pl-10">Silver</h2>
        <div className="grid grid-rows-2 grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 justify-center gap-5 lg:gap-10 px-10 lg:px-24 py-10">
          <a href="https://www.janestreet.com/" className="object-contain my-auto"><img src={jane} alt="Jane Street" /></a>
          <a href="https://www.hudsonrivertrading.com/" className="object-contain my-auto"><img src={hrt} alt="Hudson River Trading" /></a>
          <a href="https://fiverings.com/" className="object-contain my-auto"><img src={five} alt="Five Rings" /></a>
          <a href="https://optiver.com/" className="object-contain my-auto"><img src={optiver} alt="Optiver" /></a>
          <a href="https://peak6.com/" className="object-contain my-auto"><img src={peak6} alt="Peak6" /></a>
          <a href="https://www.belvederetrading.com/" className="object-contain my-auto"><img src={belvedere} alt="Belvedere Trading" /></a>
        </div>
      </div>
      
      <div className="bg-green-100 py-10 mx-5 lg:mx-20 mt-10 rounded-lg">
      <h2 className="text-left text-5xl font-medium text-zinc-700 pl-10">Competition Sponsors</h2>
      <div className="grid grid-rows-2 grid-cols-3 lg:grid-cols-3 lg:grid-rows-1 justify-center gap-5 lg:gap-10 px-10 lg:px-24 py-10">
          <a href="https://www.jumptrading.com/" className="object-contain my-auto"><img src={jump} alt="Jump Trading" /></a>
          <a href="https://www.oldmissioncapital.com/" className="object-contain my-auto"><img src={omc} alt="OMC Markets" /></a>
          <a href="https://www.sig.com/" className="object-contain my-auto"><img src={sig} alt="Susquehanna International Group" /></a>
        </div>
      </div>
      
      <h2 className="text-center text-md lg:text-xl font-medium mt-5">Interested in becoming a sponsor? Email us at <a className="text-secondary" href="mailto:corporate-outreach@quantillinois.com">corporate-outreach@quantillinois.com</a></h2>
    </div>
  )
}