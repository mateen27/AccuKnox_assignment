import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CircularProgressBar = () => {
  return (
    <CircularProgressbar
      value={50}
      text={`${2}`}
      className="w-24"
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: "butt",

        textSize: "16px",

        pathTransitionDuration: 0.5,

        pathColor: `rgba(62, 152, 199, ${66 / 100})`,
        textColor: "#3e98c7",
        trailColor: "#d6d6d6",
        backgroundColor: "#3e98c7",
      })}
    />
  );
};

export default CircularProgressBar;
