import React from "react";
import u from "../../css/utils/utils.css";

const Numbers = (props) => {
  return (
    <div>
      <span
        className={`${
          props.prependZero ? u.display_inlineBlock : u.display_none
        }`}
      >
        0
      </span>
      <span>{props.numbers}</span>
    </div>
  );
};

export default Numbers;
