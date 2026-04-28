import { useGameLogic } from "../hooks/useGameLogic";
import Board from "../logic/components/Board";

export default function Layout() {
  const { xIsNext, currentSquares, handlePlay, jumpTo, moves, resetGame } =
    useGameLogic();

  // Filter moves - hanya tampilkan move > 0 (hilangkan "Go to game start")
  const moveHistory = moves.filter((m) => m.move > 0);

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
          <button
            className="button-move rounded-2xl font-semibold mb-4 bg-[#2f7078] text-[#e1e1e1] hover:bg-[#164950]"
            onClick={resetGame}
          >
            Restart Game
          </button>
          <div className="game-info bg-[#1f4347] flex flex-col justify-center w-55 min-h-65 max-h-65 overflow-y-auto p-4 border-2 shadow-md ">
            <ol className="list-decimal list-inside space-y-2 text-[#e4e4e4] ">
              {moveHistory.map(({ move, description }) => (
                <li key={move}>
                  <button
                    className="button-move rounded-2xl  font-semibold"
                    onClick={() => jumpTo(move)}
                  >
                    {description}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
