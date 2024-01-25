import { Carousel } from 'flowbite-react';
import { BsArrowRight } from "react-icons/bs";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import imc from '../assets/companies/imc.png'
import citadel from '../assets/companies/citadel.png'
import jump from '../assets/companies/jump.png'
import optiver from '../assets/companies/optiver.png'
import akuna from '../assets/companies/akuna.png'
import millenium from '../assets/companies/millenium.png'
import uber from '../assets/companies/uber.png'
import bloomberg from '../assets/companies/bloomberg.png'


function PlacementImage({src}) {
  return (
    <div className='w-full h-full p-5'>
      <img src={src} className='w-full h-full object-contain my-auto mx-auto'></img>
    </div>
  )

}

export default function Placement() {
  const carouselSlideClass = "bg-transparent grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 h-full w-full px-24"
  return (
    <div className='h-auto bg-zinc-200 py-10 my-10'>
      <h1 className="text-center text-7xl font-medium text-primary mb-12 lg:mb-0">Placement</h1>
      <div className='h-96 md:mx-24'>
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
          {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
        </Carousel>
      </div>
    </div>
  )
}