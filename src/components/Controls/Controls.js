import React from "react";
import timer from "../../css/components/Timer/Timer.css";

const Controls = (props) => {
  let buttonIcon;

  if (props.timerIsOn) {
    buttonIcon = (
      <svg
        className={timer.pause}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="20" cy="20" r="19.5" stroke="#000000" />
        <rect x="15" y="13" width="4" height="14" fill="#000000" />
        <rect x="21" y="13" width="4" height="14" fill="#000000" />
      </svg>
    );
  } else {
    buttonIcon = (
      <svg
        className={timer.play}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M27 20.5L15.75 26.9952L15.75 14.0048L27 20.5Z"
          fill="#000000"
        />
        <circle cx="20" cy="20" r="19.5" stroke="#000000" />
      </svg>
    );
  }

  return (
    <div className={timer.controls}>
      <button className={timer.button} onClick={props.click}>
        {buttonIcon}
        <span className={timer.label}>{`${
          props.timerIsOn ? "Pause" : "Resume"
        }`}</span>
      </button>
    </div>
  );
};

export default Controls;
