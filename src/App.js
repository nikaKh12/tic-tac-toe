import React, { useState, useRef } from "react";
import Board from "./components/Board";
import Confetti from "react-confetti";
import useWindowSize from "@rooks/use-window-size";
import "./App.css";

function App() {
  const MAX_SCORE = 5;
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState("");
  const [noWinner, setNoWinner] = useState(true);
  const squares = document.querySelectorAll(".square");
  const [turn, setTurn] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const square1 = useRef(null);
  const square2 = useRef(null);
  const square3 = useRef(null);
  const square4 = useRef(null);
  const square5 = useRef(null);
  const square6 = useRef(null);
  const square7 = useRef(null);
  const square8 = useRef(null);
  const square9 = useRef(null);

  squares.forEach((square) => {
    if (gameOver) {
      square.style.pointerEvents = "none";
    }
    square.addEventListener("click", function () {
      square.style.pointerEvents = "none";
    });
  });

  function start() {
    setStartGame(true);
    setGameOver(false);
    setNoWinner(true);
    setWinner("");
    setTurn(true);
    if (winner == "X") {
      setScoreX((prevScore) => prevScore + 1);
      setRound((prevRound) => prevRound + 1);
    }
    if (winner == "O") {
      setScoreO((prevScore) => prevScore + 1);
      setRound((prevRound) => prevRound + 1);
    }
    if (winner == "Draw") {
      setRound((prevRound) => prevRound + 1);
    }
    squares.forEach((square) => {
      square.innerHTML = "";
      square.style.pointerEvents = "all";
      if (square.classList.contains("bgColor")) {
        square.classList.remove("bgColor");
      }
    });
  }
  function reset() {
    window.location.reload();
  }
  return (
    <div className="App">
      {startGame &&
        winner == "" &&
        scoreX !== MAX_SCORE &&
        scoreO !== MAX_SCORE && (
          <h4 className="round fade-in">Round {round}</h4>
        )}
      {gameOver && (
        <h4 className="winner heartbeat">
          {winner == "Draw" ? `${winner}` : `${winner} wins!`}
        </h4>
      )}
      <div className="scores">
        <div className="XScore">
          <h3>
            <span>
              X: {scoreX}/{MAX_SCORE}
            </span>
          </h3>
        </div>
        <div className="OScore">
          <h3>
            <span>
              O: {scoreO}/{MAX_SCORE}
            </span>
          </h3>
        </div>
      </div>
      <Confetti
        width={outerWidth}
        height={innerHeight}
        numberOfPieces={scoreX === MAX_SCORE || scoreO === MAX_SCORE ? 200 : 0}
      />
      {scoreX !== MAX_SCORE && scoreO !== MAX_SCORE ? (
        <Board
          startGame={startGame}
          setStartGame={setStartGame}
          turn={turn}
          setTurn={setTurn}
          gameOver={gameOver}
          setGameOver={setGameOver}
          winner={winner}
          setWinner={setWinner}
          noWinner={noWinner}
          setNoWinner={setNoWinner}
          squares={squares}
          ref={{
            ref1: square1,
            ref2: square2,
            ref3: square3,
            ref4: square4,
            ref5: square5,
            ref6: square6,
            ref7: square7,
            ref8: square8,
            ref9: square9,
          }}
        />
      ) : (
        <>
          <button className="reset-btn" onClick={reset}>
            Reset Game
          </button>
          <h1 className="game-over heartbeat fade-in">Game Over</h1>
          <h4 className="game-winner heartbeat fade-in">
            {scoreX === MAX_SCORE
              ? `X won the game in ${round - 1} rounds!`
              : `O won the game in ${round - 1} rounds!`}
          </h4>
        </>
      )}
      <div className="start-btn-wrapper">
        {!startGame && (
          <button className="start-btn" onClick={start}>
            Play
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
