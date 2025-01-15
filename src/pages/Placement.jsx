import { Carousel } from 'flowbite-react';
import { BsArrowRight } from "react-icons/bs";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import imc from '../assets/companies/imc.png'
import citadel from '../assets/companies/citadel.png'
import jump from '../assets/companies/jump.png'
import optiver from '../assets/companies/optiver.png'
import akuna from '../assets/companies/akuna.png'
import millenium from '../assets/companies/millenium.png'
import peak6 from '../assets/companies/peak6.png'
import uber from '../assets/companies/uber.png'
import bloomberg from '../assets/companies/bloomberg.png'
import jane from '../assets/companies/jane.png'
import sig from '../assets/companies/sig.png'
import hrt from '../assets/companies/hrt.png'
import google from '../assets/companies/google.png'
import meta from '../assets/companies/meta.png'
import netflix from '../assets/companies/netflix.png'
import amazon from '../assets/companies/amazon.png'


function PlacementImage({src}) {
  return (
    <div className='w-full h-20 lg:h-32 lg:p-5'>
      <img src={src} className='w-3/4 h-full object-contain my-auto mx-auto'></img>
    </div>
  )

}

export default function Placement() {
  const carouselSlideClass = "bg-transparent grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 h-full w-full px-24"
  return (
    <div className='h-auto bg-zinc-200 py-10 my-10'>
      <h1 className="text-center text-7xl font-medium text-primary mb-12 lg:mb-0">Placement</h1>
      <div className='grid grid-cols-4 mx-10 lg:mx-32 lg:my-16 lg:gap-y-6'>
        <PlacementImage src={jane} />
        <PlacementImage src={hrt} />
        <PlacementImage src={citadel} />
        <PlacementImage src={jump} />

        <PlacementImage src={optiver} />
        <PlacementImage src={sig} />
        <PlacementImage src={imc} />
        <PlacementImage src={akuna} />

        <PlacementImage src={millenium} />
        <PlacementImage src={peak6} />
        <PlacementImage src={meta} />
        <PlacementImage src={netflix} />

        <PlacementImage src={google} />
        <PlacementImage src={amazon} />
        <PlacementImage src={bloomberg} />
        <PlacementImage src={uber} />

      </div>
      {/* <div className='h-96 md:mx-24'>
        <Carousel pauseOnHover leftControl={<MdArrowBackIos className='text-3xl text-zinc-500'/>} rightControl={<MdArrowForwardIos className='text-3xl text-zinc-500'/>}>
          <div className={carouselSlideClass}>
            <PlacementImage src={citadel} />
            <PlacementImage src={imc} />
            <PlacementImage src={jump} />
            <PlacementImage src={optiver} />
          </div>

          <div className={carouselSlideClass}>
            <PlacementImage src={akuna} />
            <PlacementImage src={millenium} />
            <PlacementImage src={uber} />
            <PlacementImage src={bloomberg} />
          </div>
        </Carousel>
      </div> */}
    </div>
  )
}