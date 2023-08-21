import logo from "../assets/full-logo.png";
// import Navbar from "../HomePageComponents/NavbarComponents/Navbar";
import Discord from '../components/Discord'
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
      <motion.div
        className="absolute left-[67px] top-[44px] h-[59.97px] w-[200px]"
        initial="initial"
        animate="animate"
        variants={text_slide_in}
        transition={{ duration: 0.2 }}
      >
        <img src={logo} alt="Logo" />
      </motion.div>
      <motion.div
        className="absolute right-[50px] top-[50px] size-[100px]"
        initial="initial"
        animate="animate"
        variants={text_slide_in}
        transition={{ duration: 0.2 }}
      >
          <Discord/>
      </motion.div>

      <motion.div
        className="absolute left-[67px] bottom-[5vh] right-[32vw]"
        initial="initial"
        animate="animate"
        variants={text_slide_in}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        <p className="font-Inter text-[4rem] font-medium leading-[5rem]">
          We are <span className="text-primary">Quant</span> at <span className="text-orange-600">Illinois</span>, a student-run
          quantitative finance and HFT organization at UIUC.
        </p>
      </motion.div>
    </div>
  );
}
