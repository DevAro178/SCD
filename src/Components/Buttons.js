import React from "react";
const Buttons = ({ name }) => {
  return (
    <div className="btn">
      <button type="submit">{name}</button>
    </div>
  );
};

export default Buttons;
