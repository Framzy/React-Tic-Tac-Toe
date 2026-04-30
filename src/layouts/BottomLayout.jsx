import Status from "../components/Status";
import ResetButtton from "../logic/components/ResetButton";

export default function BottomLayout({ xIsNext, currentSquares, resetGame }) {
  return (
    <>
      <div className="w-full mt-6 flex flex-col justify-center items-center gap-2 ">
        <Status xIsNext={xIsNext} squares={currentSquares} />
        <ResetButtton resetGame={resetGame} />
      </div>
    </>
  );
}
