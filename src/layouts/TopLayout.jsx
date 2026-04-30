import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

export default function TopLayout({
  xIsNext,
  currentSquares,
  handlePlay,
  jumpTo,
  moves,
}) {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 ==">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <GameInfo jumpTo={jumpTo} moves={moves} />
      </div>
    </>
  );
}
