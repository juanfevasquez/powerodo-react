import React from "react";
import Circle from "../../css/components/Circle/Circle.css";

const circle = (props) => {
  return (
    <svg className={Circle.svg} viewBox="0 0 270 270">
      <circle
        className={`
                ${Circle.progress}
                ${props.isActive ? Circle.isActive : ""}
                ${props.isRunning ? Circle.isRunning : Circle.isPaused}
                `}
        cx="135"
        cy="135"
        r="120"
      />
    </svg>
  );
};

export default circle;
