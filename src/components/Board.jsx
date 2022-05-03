import React from "react";
import Square from "./Square";

const Board = React.forwardRef((props, ref) => {
  function handleClick() {
    props.setTurn((prevState) => !prevState);
  }
  const renderSquare = (className, refName) => {
    return (
      <Square
        startGame={props.startGame}
        setStartGame={props.setStartGame}
        className={className}
        gameOver={props.gameOver}
        setGameOver={props.setGameOver}
        winner={props.winner}
        setWinner={props.setWinner}
        turn={props.turn}
        setTurn={props.setTurn}
        onClick={handleClick}
        noWinner={props.noWinner}
        setNoWinner={props.setNoWinner}
        squares={props.squares}
        refs={ref}
        refName={refName}
      />
    );
  };
  return (
    <div
      className="board"
      style={{
        pointerEvents: props.startGame ? "all" : "none",
      }}
    >
      <h1 className="title">Tic Tac Toe</h1>
      <div className="first-row">
        {renderSquare("square-1", ref.ref1)}
        {renderSquare("square-2", ref.ref2)}
        {renderSquare("square-3", ref.ref3)}
      </div>
      <div className="second-row">
        {renderSquare("square-4", ref.ref4)}
        {renderSquare("square-5", ref.ref5)}
        {renderSquare("square-6", ref.ref6)}
      </div>
      <div className="third-row">
        {renderSquare("square-7", ref.ref7)}
        {renderSquare("square-8", ref.ref8)}
        {renderSquare("square-9", ref.ref9)}
      </div>
    </div>
  );
});

export default Board;
