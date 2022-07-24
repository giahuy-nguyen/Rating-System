import React from "react";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button fontSize="5.0 rem" ref={buttonRef} onClick={showModal}>
      {triggerText}
    </button>
  );
};
export default Trigger;
