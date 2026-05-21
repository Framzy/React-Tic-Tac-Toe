import matchHistoryIcon from "../../assets/match-history-icon.webp";

export default function ResetButtton({ resetGame }) {
  return (
    <>
      <button
        className="w-1/2 flex items-center p-3 bg-[var(--color-primary)] border-2 border-[var(--color-secondary)] rounded-xl shadow-md hover:bg-[var(--color-secondary)] transition-colors duration-300 cursor-pointer"
        onClick={resetGame}
      >
        <img src={matchHistoryIcon} alt="Move History" className="w-6 h-6" />
        <p className="flex-1 text-white text-sm sm:text-md text-center font-bold">
          Reset Game
        </p>{" "}
      </button>
    </>
  );
}
