import React from "react";
import TeamOverview from "../components/TeamOverview";

import { useState } from "react";
import { teamData } from "../assets/teamData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export default function Divisions() {
  const [currTeam, setCurr] = useState(0);

  var researchColor =
    currTeam === 0
      ? teamData[currTeam].textColor + " decoration-solid"
      : "text-black decoration-dotted";
  var tradingColor =
    currTeam === 1
      ? teamData[currTeam].textColor + " decoration-solid"
      : "text-black decoration-dotted";
  var softwareColor =
    currTeam === 2
      ? teamData[currTeam].textColor + " decoration-solid"
      : "text-black decoration-dotted";
  var operationsColor =
    currTeam === 3
      ? teamData[currTeam].textColor + " decoration-solid"
      : "text-black decoration-dotted";

  function setCurrTeam(num) {
    function temp() {
      if (num === currTeam) {
        setCurr(-1);
      } else {
        setCurr(num);
      }
    }
    return temp;
  }

  useEffect(() => {
    if (currTeam !== -1) {
      const element =
        teamOverviewRef.current.getBoundingClientRect().top + window.scrollY;

      window.scroll({
        top: element,
        behavior: "smooth",
      });
    }
  }, [currTeam]);
  const teamOverviewRef = useRef(null);

  const text_slide_in = {
    initial: { translateY: "50px", opacity: 0 },
    animate: { translateY: "0px", opacity: 1 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <div className="mt-20">
      <div className="px-5 lg:px-20">
        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={text_slide_in}
          transition={{ duration: 0.2 }}
        >
          <h1 className="text-center text-7xl mb-10 font-medium text-primary">Divisions</h1>
        </motion.div>

        <motion.div
          className=""
          initial="initial"
          animate={controls}
          variants={text_slide_in}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <p className="text-xl lg:text-4xl font-medium text-justify">
            We use a combination of quantitative and
            qualitative tools to uncover independent, hard-to-find sources of
            return across global public and private markets. In order to
            maximize efficiency, our work is split across four divisions:{" "}
            <span
              onClick={setCurrTeam(0)}
              className={
                "cursor-pointer underline hover:decoration-solid " +
                researchColor
              }
            >
              Research
            </span>
            ,{" "}
            <span
              onClick={setCurrTeam(1)}
              className={
                "cursor-pointer underline hover:decoration-solid " +
                tradingColor
              }
            >
              Trading
            </span>
            ,{" "}
            <span
              onClick={setCurrTeam(2)}
              className={
                "cursor-pointer underline hover:decoration-solid " +
                softwareColor
              }
            >
              Software
            </span>{" "}
            and{" "}
            <span
              onClick={setCurrTeam(3)}
              className={
                "cursor-pointer underline hover:decoration-solid " +
                operationsColor
              }
            >
              Operations
            </span>
            .
          </p>
        </motion.div>
        <div ref={teamOverviewRef}>
          {currTeam !== -1 && <TeamOverview data={teamData[currTeam]} />}
        </div>
      </div>
    </div>
  );
}
