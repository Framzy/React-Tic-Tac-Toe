import { useGameLogic } from "../hooks/useGameLogic";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";
import Status from "../components/Status";
import ResetButtton from "../logic/components/ResetButton";

export default function Layout() {
  const { xIsNext, currentSquares, handlePlay, jumpTo, moves, resetGame } =
    useGameLogic();

  // Filter moves - hanya tampilkan move > 0 (hilangkan "Go to game start")

  return (
    <>
      <div className="bg-[#2f7078] h-screen flex flex-col justify-center items-center">
        <h1 className="text-[#e1e1e1] text-center text-4xl font-bold mb-10 shadow-md">
          Tic Tac Toe Game
        </h1>

        <div className="game flex flex-row justify-center items-center gap-10 ">
          <div className="game-board text-center">
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </div>
          <GameInfo jumpTo={jumpTo} moves={moves} />
        </div>
        <div className="status-container mt-6 bg-amber-50">
          <Status xIsNext={xIsNext} squares={currentSquares} />
          <ResetButtton resetGame={resetGame} />
        </div>
      </div>
    </>
  );
}
