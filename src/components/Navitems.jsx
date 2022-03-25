import React from "react";
import "./Navitems.css";
function Navitems({ Icon, title, className }) {
  return (
    <div className={className}>
      {Icon && <Icon />}
      <span className="navitem__title">{title}</span>
    </div>
  );
}

export default Navitems;
