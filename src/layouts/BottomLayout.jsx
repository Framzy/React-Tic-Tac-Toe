import Status from "../components/Status";
import ResetButtton from "../logic/components/ResetButton";

export default function BottomLayout({ xIsNext, resetGame }) {
  let status = `Next player is ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <Status status={status} />
        <ResetButtton resetGame={resetGame} />
      </div>
    </>
  );
}
