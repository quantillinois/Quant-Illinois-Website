import logo from "../assets/full-logo.png";
// import Navbar from "../HomePageComponents/NavbarComponents/Navbar";
import { BsDiscord, BsArrowRight, BsTrophy, BsGraphUpArrow, BsGraphUp} from 'react-icons/bs';


import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react'
import TRUNK from "vanta/dist/vanta.trunk.min";
import p5 from "p5";

export default function Home() {
  const text_slide_in = {
    initial: { translateY: "50px", opacity: 0 },
    animate: { translateY: "0px", opacity: 1 },
  };

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TRUNK({
          el: vantaRef.current,
          p5: p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x25c7de,
          backgroundColor: 0xffffff,
          spacing: 0.50,
          chaos: 4.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="h-screen flex" ref={vantaRef}>
      <div className="w-screen flex z-10 justify-between">
        <motion.div
          className="w-48 m-10"
          initial="initial"
          animate="animate"
          variants={text_slide_in}
          transition={{ duration: 0.2 }}
        >
          <img src={logo} alt="Logo" />
        </motion.div>
        <motion.div
          className="m-10"
          initial="initial"
          animate="animate"
          variants={text_slide_in}
          transition={{ duration: 0.2 }}
        >
          <div className="flex">
            {/* <a href="https://forms.gle/veU465tnB88JgnV16" className="flex text-2xl mr-7 hover:border-b-2 duration-150 border-black">
              <p>Apply</p>
              <BsArrowRight className="-rotate-45 mt-1"/>
            </a> */}
            <a href="/trading-competition" className="relative flex text-2xl mr-7 duration-150 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full before:origin-left hover:before:origin-right">
              <p>Trading Competition Information</p>
              <BsTrophy className="mt-1 ml-2"/>
            </a>
            <a href="/trading" className="relative flex text-2xl mr-7 duration-150 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full before:origin-left hover:before:origin-right">
              <p>Mock Trading</p>
              <BsGraphUp className="mt-1.5 ml-2"/>
            </a>
            <a href="https://discord.gg/xnjdcgteKR" target="_blank" rel="noreferrer">
              <BsDiscord className="text-4xl hover:text-primary duration-200" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute left-[67px] bottom-[5vh] right-[32vw]"
        initial="initial"
        animate="animate"
        variants={text_slide_in}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <p className="text-3xl md:text-4xl lg:text-6xl font-medium">
          We are <span className="text-primary">Quant</span> @ <span className="text-orange-500">Illinois</span>, a student-run
          quantitative finance and high frequency trading organization at the University of Illinois at Urbana-Champaign.
        </p>
      </motion.div>
    </div>
  );
}
