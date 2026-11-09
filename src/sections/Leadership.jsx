import LeadershipCard from '../components/LeadershipCard';

import achoi from "../assets/people/leadership/achoi.png"
import andrew from "../assets/people/leadership/andrew.png"
import ec from "../assets/people/leadership/ec.png"
import eric from "../assets/people/leadership/eric.png"
import josh from "../assets/people/leadership/josh.png"
import kartik from "../assets/people/leadership/kartik.png"
import matt from "../assets/people/leadership/fakler.png"
import anuraag from "../assets/people/leadership/anuraag.jpeg"
import jj from "../assets/people/leadership/jj.png"
import melinda from "../assets/people/leadership/melinda.jpg"


export default function Leadership() {
  return (
    <section id="team" className="section wrap" aria-labelledby="team-title">
      <div className="section-intro">
        <h2 id="team-title">Meet the leadership.</h2>
      </div>
      <div className="leadership-grid">
        <LeadershipCard img={anuraag} name="Anuraag Aravindan" position="President" link="https://www.linkedin.com/in/anuraag-aravindan/"/>
        <LeadershipCard img={andrew} name="Andrew Di" position="Trading" link="https://www.linkedin.com/in/andrew-di/"/>
        <LeadershipCard img={eric} name="Eric Wang" position="Trading" link="https://www.linkedin.com/in/eric-wang-ab3009326/"/>
        <LeadershipCard img={josh} name="Josh Hemingson" position="Trading" link="https://www.linkedin.com/in/josh-hemingson/"/>
        <LeadershipCard img={melinda} name="Melinda Yuan" position="Trading" link="https://www.linkedin.com/in/melindayuuan/"/>
        <LeadershipCard img={ec} name="Eric Chen" position="Trading" link="https://www.linkedin.com/in/eric-ec/"/>
        <LeadershipCard img={matt} name="Matthew Fakler" position="Trading" link="https://www.linkedin.com/in/matthewfakler/"/>
        <LeadershipCard img={achoi} name="Andrew Choi" position="Software" link="https://www.linkedin.com/in/andrewchoij/"/>
        <LeadershipCard img={jj} name="Joseph Jiang" position="Software" link="https://www.linkedin.com/in/joseph-jiang18/"/>
        <LeadershipCard img={kartik} name="Kartik Vasudeva" position="Software" link="https://www.linkedin.com/in/kartik-vasudeva-72591a288/"/>
      </div>
    </section>
  )
}
