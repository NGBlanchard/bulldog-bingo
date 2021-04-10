import React from "react";

export default function Header(props) {
  return (
    <div className="bulldog">
      {props.won ? (
        <h1 className="winner-banner">YOU HAVE A BINGO!</h1>
      ) : (
        <h1 className="banner">BULLDOG BINGO</h1>
      )}
      <div></div>
    </div>
  );
}
