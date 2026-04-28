import Square from "./Square";
import { calculateWinner } from "../utils/calculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const boardFull = squares.every(Boolean);
  const isDraw = !winner && boardFull;

  let status;

  if (winner) {
    status = `Winner is ${winner}`;
  } else if (isDraw) {
    status = "It's a Draw!";
  } else {
    status = `Next player is ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status mb-4 font-bold text-[#d7d7d7]">{status}</div>
      <div className="board grid grid-cols-3 gap-1">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
}
