import React, { useState } from "react";

export default function Cell(props) {
  const [on, setOn] = useState(false);
  const [color, setColor] = useState("#2b3182");
  
  function toggleCell() {
    setOn(!on)
    if (color === "#2b3182") {
      setColor("#088444")
    } else {
      setColor("#2b3182")
    }
    props.select(props.index)
  }

  return (
    <div className="box" onClick={toggleCell} style={props.icon === "/static/media/free.9e127621.png" ? ({ backgroundColor: "#088444" }) : ({ backgroundColor: color })} >
      <img className="icon" src={props.icon} alt="icon"/>
    </div>
 
  )
}
