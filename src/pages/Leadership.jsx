import React from 'react';
import LeadershipCard from '../components/LeadershipCard';

import abhay from "../assets/people/leadership/abhay.jpg"
import achintya from "../assets/people/leadership/achintya.jpg"
import ben from "../assets/people/leadership/ben.jpg"
import eric from "../assets/people/leadership/eric.jpg"
import john from "../assets/people/leadership/john.jpg"


function Leadership() {
  return (
    <div className='mt-16 flex flex-col items-center w-5/6 mx-auto'>
      <h1 className="text-center text-7xl mb-10 font-medium text-primary">Leadership</h1>
      <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 w-full gap-y-8'> 
        <LeadershipCard img={abhay} name="Abhay Benoy" position="President" link="https://www.linkedin.com/in/abhay-benoy/"/>
        <LeadershipCard img={achintya} name="Achintya Sanjay" position="Head of Operations"/>
        <LeadershipCard img={ben} name="Benjamin Nguyen" position="Head of Software"/>
        <LeadershipCard img={eric} name="Eric Zhu" position="Head of Research"/>
        <div className='hidden lg:block'></div>
        <LeadershipCard img={john} name="John Zammit" position="Co-Head of Trading" className="col-span-2 ms-12"/>
        {/* <LeadershipCard img="as.jpg" name="Myles Phung" position="Co-Head of Trading"/> */}
      </div>
      {/* <div className='flex justify-around w-full mb-6'>
        
      </div>
      <div className='flex justify-around w-full'>
        
      </div> */}
    </div>
  );
};

export default Leadership;
