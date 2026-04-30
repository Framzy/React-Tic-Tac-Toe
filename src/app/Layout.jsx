import { useGameLogic } from "../hooks/useGameLogic";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";
import Status from "../components/Status";
import ResetButtton from "../logic/components/ResetButton";
import TopLayout from "../layouts/TopLayout";
import BottomLayout from "../layouts/BottomLayout";

export default function Layout() {
  const { xIsNext, currentSquares, handlePlay, jumpTo, moves, resetGame } =
    useGameLogic();

  return (
    <>
      <main className="bg-[#8172d6] h-screen w-full flex justify-center items-center">
        <div className="w-5/7 flex flex-col justify-center items-center">
          <h1 className=" text-[#e1e1e1] text-center text-4xl font-bold mb-10 shadow-md">
            Tic Tac Toe Game
          </h1>

          <TopLayout
            xIsNext={xIsNext}
            currentSquares={currentSquares}
            handlePlay={handlePlay}
            jumpTo={jumpTo}
            moves={moves}
          />

          <BottomLayout
            xIsNext={xIsNext}
            currentSquares={currentSquares}
            resetGame={resetGame}
          />
        </div>
      </main>
    </>
  );
}
