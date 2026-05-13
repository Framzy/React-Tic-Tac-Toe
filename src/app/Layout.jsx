import { useEffect, useState } from "react";
import { desktopStars, mobileStars } from "../data/stars.data";
import { useGameLogic } from "../hooks/useGameLogic";
import background from "../assets/background.webp";
import StarsBackground from "../components/background/StarsBackground";
import TopLayout from "../layouts/TopLayout";
import BottomLayout from "../layouts/BottomLayout";

export default function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const stars = isMobile ? mobileStars : desktopStars;

  const { xIsNext, currentSquares, handlePlay, jumpTo, moves, resetGame } =
    useGameLogic();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
      {/* Layer 1: Background Image */}
      <div
        className="bg-layer absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

      <div className="scene relative z-20 flex justify-center items-center">
        {/* Layer 2: Stars */}
        <div className="stars-layer absolute inset-0 pointer-events-none z-0">
          <StarsBackground stars={stars} />
        </div>

        {/* Layer 3: Content */}
        <div className="content relative z-10 flex flex-col justify-center items-center gap-8 origin-center">
          <h1 className="text-[#e1e1e1] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
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
      </div>
    </main>
  );
}
