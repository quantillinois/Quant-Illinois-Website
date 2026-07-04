import React from 'react';
import LeadershipCard from '../components/LeadershipCard';

import achoi from "../assets/people/leadership/achoi.png"
import andrew from "../assets/people/leadership/andrew.png"
import ec from "../assets/people/leadership/ec.png"
import eric from "../assets/people/leadership/eric.png"
import josh from "../assets/people/leadership/josh.png"
import kartik from "../assets/people/leadership/kartik.png"
import matt from "../assets/people/leadership/matt.png"
import anuraag from "../assets/people/leadership/anuraag.jpeg"
import jj from "../assets/people/leadership/jj.png"
import melinda from "../assets/people/leadership/melinda.png"


function Leadership() {
  return (
    <div className='mt-16 flex flex-col items-center w-5/6 mx-auto'>
      <h1 className="text-center text-7xl mb-10 font-medium text-primary">Leadership</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-y-8'>
        <LeadershipCard img={anuraag} name="Anuraag Aravindan" position="President" link="https://www.linkedin.com/in/anuraag-aravindan/" secretText="big boss"/>
        <LeadershipCard img={andrew} name="Andrew Di" position="Trading" link="https://www.linkedin.com/in/andrew-di/" secretText="poker shark"/>
        <LeadershipCard img={eric} name="Eric Wang" position="Trading" link="https://www.linkedin.com/in/eric-wang-ab3009326/" secretText="killua"/>
        <LeadershipCard img={josh} name="Josh Hemingson" position="Trading" link="https://www.linkedin.com/in/josh-hemingson/" secretText="imc savior"/>
        <LeadershipCard img={melinda} name="Melinda Yuan" position="Trading" link="https://www.linkedin.com/in/melindayuuan/" secretText="game night host goat"/>
        <LeadershipCard img={ec} name="Eric Chen" position="Trading" link="https://www.linkedin.com/in/eric-ec/" secretText="tft gm"/>
        <LeadershipCard img={matt} name="Matthew Fakler" position="Trading" link="https://www.linkedin.com/in/matthewfakler/" secretText="discovery day farmer"/>
        <LeadershipCard img={achoi} name="Andrew Choi" position="Software" link="https://www.linkedin.com/in/andrewchoij/" secretText="d1 larp"/>
        <LeadershipCard img={jj} name="Joseph Jiang" position="Software" link="https://www.linkedin.com/in/joseph-jiang18/" secretText="bite size"/>
        <LeadershipCard img={kartik} name="Kartik Vasudeva" position="Software" link="https://www.linkedin.com/in/kartik-vasudeva-72591a288/" secretText="let him cook"/>
      </div>
    </div>
  );
};

export default Leadership;
