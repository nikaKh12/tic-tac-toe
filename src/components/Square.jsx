import React, { useEffect } from "react";

export default function Square(props) {
  const sqr1 = props.refs.ref1;
  const sqr2 = props.refs.ref2;
  const sqr3 = props.refs.ref3;
  const sqr4 = props.refs.ref4;
  const sqr5 = props.refs.ref5;
  const sqr6 = props.refs.ref6;
  const sqr7 = props.refs.ref7;
  const sqr8 = props.refs.ref8;
  const sqr9 = props.refs.ref9;

  function addClass(element, className) {
    element.classList.add(className);
  }
  function animateBgColor(square1, square2, square3) {
    addClass(square1, "bgColor");
    addClass(square2, "bgColor");
    addClass(square3, "bgColor");
  }

  useEffect(() => {
    if (props.refs.ref1) {
      function checkWinner(index1, index2, index3, player, playerCaps, draw) {
        if (
          index1.innerHTML ===
            `<i class="fa-solid fa-${player} fade-in checked${playerCaps}"></i>` &&
          index2.innerHTML ===
            `<i class="fa-solid fa-${player} fade-in checked${playerCaps}"></i>` &&
          index3.innerHTML ===
            `<i class="fa-solid fa-${player} fade-in checked${playerCaps}"></i>`
        ) {
          props.setNoWinner(false);
          props.setStartGame(false);
          props.setGameOver(true);
          props.setWinner(`${playerCaps}`);
          animateBgColor(index1, index2, index3);
        } else if (
          sqr1.current.innerHTML !== "" &&
          sqr2.current.innerHTML !== "" &&
          sqr3.current.innerHTML !== "" &&
          sqr4.current.innerHTML !== "" &&
          sqr5.current.innerHTML !== "" &&
          sqr6.current.innerHTML !== "" &&
          sqr7.current.innerHTML !== "" &&
          sqr8.current.innerHTML !== "" &&
          sqr9.current.innerHTML !== ""
        ) {
          props.setStartGame(false);
          props.setGameOver(true);
          {
            props.noWinner
              ? props.setWinner("Draw")
              : props.setWinner(`${draw}`);
          }
        }
      }
      function callCheckWinner(plyr, caps, draw) {
        checkWinner(sqr1.current, sqr2.current, sqr3.current, plyr, caps, draw);
        checkWinner(sqr4.current, sqr5.current, sqr6.current, plyr, caps, draw);
        checkWinner(sqr7.current, sqr8.current, sqr9.current, plyr, caps, draw);
        checkWinner(sqr1.current, sqr4.current, sqr7.current, plyr, caps, draw);
        checkWinner(sqr2.current, sqr5.current, sqr8.current, plyr, caps, draw);
        checkWinner(sqr3.current, sqr6.current, sqr9.current, plyr, caps, draw);
        checkWinner(sqr1.current, sqr5.current, sqr9.current, plyr, caps, draw);
        checkWinner(sqr3.current, sqr5.current, sqr7.current, plyr, caps, draw);
      }
      callCheckWinner("x", "X", "O");

      callCheckWinner("o", "O", "X");
    }
  });
  const icon = props.turn
    ? `<i class="fa-solid fa-x fade-in checkedX"></i>`
    : `<i class="fa-solid fa-o fade-in checkedO"></i>`;
  props.squares.forEach((square) => {
    square.addEventListener("click", function () {
      square.innerHTML = icon;
      if (square.innerHTML == icon) {
        square.style.pointerEvents = "none";
      }
    });
  });
  return (
    <div
      className={`square ${props.className}`}
      onClick={props.onClick}
      ref={props.refName}
    ></div>
  );
}
