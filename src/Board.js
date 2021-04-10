import React, { useState, useEffect } from "react";
import Cell from "./Cell.js";
import freebie from "./icons/free.png";
import backpack from "./icons/backpack.svg";
import paperclip from "./icons/paperclip.svg";
import beaker from "./icons/beaker.svg";
import book from "./icons/book.svg";
import books from "./icons/books.svg";
import clipboard from "./icons/clipboard.svg";
import crayons from "./icons/crayons.svg";
import desktop from "./icons/desktop.svg";
import globe from "./icons/earth-globe.svg";
import glasses from "./icons/glasses.svg";
import cap from "./icons/graduation-hat.svg";
import notebook from "./icons/notebook.svg";
import palette from "./icons/paint-palette.svg";
import paintbrush from "./icons/paintbrush.svg";
import paper from "./icons/paper.svg";
import pen from "./icons/pen.svg";
import pencil from "./icons/pencil.svg";
import protractor from "./icons/protractor.svg";
import ruler from "./icons/ruler.svg";
import schedule from "./icons/schedule.svg";
import stapler from "./icons/stapler.svg";
import tape from "./icons/tape.svg";
import triangle from "./icons/triangle.svg";
import school from "./icons/school.svg";

export default function Board(props) {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    let icons = [
      backpack,
      paperclip,
      beaker,
      book,
      books,
      clipboard,
      crayons,
      desktop,
      globe,
      glasses,
      cap,
      notebook,
      palette,
      paintbrush,
      paper,
      pen,
      pencil,
      protractor,
      ruler,
      schedule,
      stapler,
      tape,
      triangle,
      school,
    ];
    
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      array.splice(12, 0, freebie);
      return array;
    }
    setBoard(shuffle(icons));
  }, []);

  return (
    <>
      <div className="card-cont">
        {board.map((cell, index) => (
          <Cell
            key={index}
            index={index + 1}
            icon={cell}
            select={props.select}
          />
        ))}
      </div>
    </>
  );
}
