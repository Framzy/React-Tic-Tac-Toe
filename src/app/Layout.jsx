import { useGameLogic } from "../hooks/useGameLogic";
import background from "../assets/background.webp";
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
    <main className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
      {/* Layer 1: Background Image */}
      <div
        className="bg-layer absolute inset-0 -z-10 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

      {/* Layer 2: Stars */}
      <div className="stars-layer fixed inset-0 pointer-events-none -z-10"></div>

      {/* Layer 3: Content */}
      <div className="content relative z-10 w-5/7 flex flex-col justify-center items-center gap-10 p-10 sm:p-0">
        <h1 className="text-[#e1e1e1] text-center text-4xl sm:text-5xl font-bold">
          TIC TAC TOE GAME
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
  );
}
