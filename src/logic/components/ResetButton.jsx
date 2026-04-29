export default function ResetButtton({ resetGame }) {
  return (
    <>
      {" "}
      <button
        className="button-move rounded-2xl font-semibold mb-4 bg-[#2f7078] text-[#e1e1e1] hover:bg-[#164950]"
        onClick={resetGame}
      >
        Restart Game
      </button>
    </>
  );
}
