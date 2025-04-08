import React from 'react';
import LeadershipCard from '../components/LeadershipCard';

import abhay from "../assets/people/leadership/abhay.jpg"
import julie from "../assets/people/leadership/julie.jpeg"
import ian from "../assets/people/leadership/ian.jpg"
import eric from "../assets/people/leadership/eric.jpg"
import john from "../assets/people/leadership/john.jpg"
import nishk from "../assets/people/leadership/nishk.jpg"
import zachary from "../assets/people/leadership/zachary.jpeg"
import anuraag from "../assets/people/leadership/anuraag.jpeg"
import james from "../assets/people/leadership/james.jpg"


function Leadership() {
  return (
    <div className='mt-16 flex flex-col items-center w-5/6 mx-auto'>
      <h1 className="text-center text-7xl mb-10 font-medium text-primary">Leadership</h1>
      <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 w-full gap-y-8'> 
        <LeadershipCard img={nishk} name="Nishk Patel" position="President" link="https://www.linkedin.com/in/nishk-patel/" secretText = "fake pres"/>
        <LeadershipCard img={ian} name="Ian Sornson" position="Software" link="https://www.linkedin.com/in/ian-sornson/"  secretText = "thanks for the car"/>
        <LeadershipCard img={abhay} name="Abhay Benoy" position="Software" link="https://www.linkedin.com/in/abhay-benoy/" secretText="impeached"/>
        <LeadershipCard img={julie} name="Julie Lima" position="Software" link="https://www.linkedin.com/in/julielima/" secretText="rofl"/>
        <LeadershipCard img={james} name="James Xu" position="Software" link="https://www.linkedin.com/in/xu-james/" secretText="hacker/vibecoder"/>
        {/* <div className='hidden lg:block'></div> */}
        <LeadershipCard img={eric} name="Eric Zhu" position="Trading" link="https://www.linkedin.com/in/zhueric2004/" secretText= "darius"/>
        <LeadershipCard img={john} name="John Zammit" position="Trading" link="https://www.linkedin.com/in/johnchristopherzammit/"  secretText = "64 bit"/>
        <LeadershipCard img={zachary} name="Zachary Zhang" position="Trading" link="https://www.linkedin.com/in/zachary-zhang-8772b1204/" secretText = "whackary"/>
        <LeadershipCard img={anuraag} name="Anuraag Aravindan" position="Trading" link="https://www.linkedin.com/in/anuraag-aravindan/" secretText = "our spy"/>
      </div>
    </div>
  );
};

export default Leadership;
