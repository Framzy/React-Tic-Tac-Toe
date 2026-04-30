import Square from "../logic/components/Square";
import { calculateWinner } from "../logic/utils/calculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  return (
    <div className="bg-[var(--color-primary)] w-full max-w-[var(--board-size)] aspect-square flex justify-center items-center border-2 border-[var(--color-secondary)] rounded-2xl shadow-md p-5">
      <div className="grid grid-cols-3 gap-3 w-full h-full">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
