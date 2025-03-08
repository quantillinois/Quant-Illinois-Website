import React, { useState, useEffect, useRef } from "react";
import TeamOverview from "../components/TeamOverview";
import { teamData } from "../assets/teamData";

export default function Divisions() {
  const [currTeam, setCurr] = useState(-1);

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

  return (
    <div className="mt-20">
      <div className="px-5 lg:px-20">
        <h1 className="text-center text-7xl mb-10 font-medium text-primary">Divisions</h1>
        <p className="text-xl lg:text-4xl font-medium text-justify">
          We use a combination of quantitative and
          qualitative tools to uncover independent, hard-to-find sources of
          return across global public and private markets. In order to
          maximize efficiency, our work is split across two divisions:{" "}
          <span
            onClick={setCurrTeam(0)}
            className={
              "cursor-pointer underline hover:decoration-solid " +
              researchColor
            }
          >
            Trading
          </span>
          {" "}and{" "}
          <span
            onClick={setCurrTeam(1)}
            className={
              "cursor-pointer underline hover:decoration-solid " +
              tradingColor
            }
          >
            Software
          </span>
          .
        </p>
        <div ref={teamOverviewRef}>
          {currTeam !== -1 && <TeamOverview data={teamData[currTeam]}/>}
        </div>
      </div>
    </div>
  );
}