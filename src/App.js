import React, { useState } from "react";
import Board from "./Board.js";
import Header from "./Header.js";
import "./App.css";

function App() {
  const [selected] = useState(["13"]);
  const [won, setWon] = useState(false);

  const winners = [
    ["1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15"],
    ["16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25"],
    ["1", "6", "11", "16", "21"],
    ["2", "7", "12", "17", "22"],
    ["3", "8", "13", "18", "23"],
    ["4", "9", "14", "19", "24"],
    ["5", "10", "15", "20", "25"],
    ["1", "7", "13", "19", "25"],
    ["5", "9", "13", "17", "21"],
  ];


  function select(n) {
    let num = n.toString();
    const index = selected.indexOf(num);
    if (selected.includes(num) === false) selected.push(num);
    if (num !== "13" && index > -1) {
      selected.splice(index, 1);
    }
    checkWinner();
  }

  function checkWinner() {
    let checker = (arr, target) => target.every((v) => arr.includes(v));
    let results = [];
    for (let i = 0; i < winners.length; i++) {
      if (checker(selected, winners[i])) {
        results.push(true);
      } else results.push(false);
    }
    if (results.includes(true)) {
      setWon(true);
    } else {
      setWon(false);
    }
  }

  return (
    <>
      <div id="outer-container">
        <div id="container">
          <Header won={won} />
          <Board select={select} />
        </div>
      </div>
    </>
  );
}

export default App;
