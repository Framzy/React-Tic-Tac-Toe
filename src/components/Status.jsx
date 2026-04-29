import { calculateWinner } from "../logic/utils/calculateWinner";

export default function Status({ xIsNext, squares }) {
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
    </>
  );
}
