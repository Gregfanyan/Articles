import React from "react";

import "./buttons.scss";

function Buttons({ changeUrlhandleCLick, isClicked }) {
  return (
    <div className="buttons-section">
      <button
        onClick={changeUrlhandleCLick}
        className={
          isClicked
            ? "buttons-section__active-button"
            : "buttons-section__inactive-button"
        }
        disabled={isClicked}
      >
        new
      </button>
      <button
        onClick={changeUrlhandleCLick}
        className={
          !isClicked
            ? "buttons-section__active-button"
            : "buttons-section__inactive-button"
        }
        disabled={!isClicked}
      >
        past
      </button>
    </div>
  );
}

export default Buttons;
