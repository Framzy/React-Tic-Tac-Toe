import { calculateWinner } from "../logic/utils/calculateWinner";
import matchHistoryIcon from "../assets/match-history-icon.webp";

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
      <div className="w-full flex items-center p-3 bg-[var(--color-primary)] border-2 border-[var(--color-secondary)] rounded-xl shadow-md">
        <img src={matchHistoryIcon} alt="Move History" className="w-6 h-6" />
        <p className="flex-1 text-white text-md text-center font-bold">
          {status}
        </p>
      </div>
    </>
  );
}
