import React from "react";
import "./ButtonsGroup.css";

function ButtonsGroup(props) {
  return (
    <div className="buttons-wrapper">
      <div className="input-text-wrapper">
        <input type="text" name="up-text" id="up-text" placeholder="Shut Up" />
        <input
          type="text"
          name="down-text"
          id="down-text"
          placeholder="and take the money"
        />
      </div>
      <button>Get a new meme image 🖼</button>
    </div>
  );
}

export default ButtonsGroup;
