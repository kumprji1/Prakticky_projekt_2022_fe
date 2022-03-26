import React from "react";
import ReactDOM from "react-dom";

import './Backdrop.css'

const Backdrop = ({clear}) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={clear}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
