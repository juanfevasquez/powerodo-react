import React from "react";
import timer from "../../css/components/Timer/Timer.css";

const Controls = (props) => {
  return (
    <div className={timer.controls}>
      <button className={timer.button} onClick={props.click}>
        <svg
          className={timer.play}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M27 20.5L15.75 26.9952L15.75 14.0048L27 20.5Z"
            fill="#FF3D00"
          />
          <circle cx="20" cy="20" r="19.5" stroke="#E5E5E5" />
        </svg>
        <svg
          className={timer.pause}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="19.5" stroke="#E5E5E5" />
          <rect x="15" y="13" width="4" height="14" fill="#FF3D00" />
          <rect x="21" y="13" width="4" height="14" fill="#FF3D00" />
        </svg>
        <span className={timer.label}>{`${
          props.timerIsOn ? "Pause" : "Resume"
        }`}</span>
      </button>
    </div>
  );
};

export default Controls;
