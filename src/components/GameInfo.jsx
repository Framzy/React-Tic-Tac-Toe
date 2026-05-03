import matchHistoryIcon from "../assets/match-history-icon.webp";

export default function GameInfo({ jumpTo, moves }) {
  const moveHistory = moves.filter((m) => m.move > 0);

  return (
    <div className="game-info flex flex-col items-center gap-2 w-full max-w-[var(--history-width)] h-full aspect-square">
      <section className="w-full">
        <div className="flex items-center p-3 bg-[var(--color-primary)] border-2 border-[var(--color-secondary)] rounded-xl shadow-md">
          <img src={matchHistoryIcon} alt="Move History" className="w-6" />
          <p className="flex-1 text-white text-md text-center font-bold">
            Match History
          </p>
        </div>
      </section>

      <section className="custom-scrollbar bg-[#FEF9FF] w-full border-2 border-[var(--color-secondary)] shadow-md rounded-lg py-4 px-3">
        <ul className="space-y-2">
          {moveHistory.map(({ move, description }) => (
            <li key={move}>
              <button
                className="w-full p-1  text-left text-md md:text-xl font-semibold text-[#7473F2] hover:text-[var(--color-primary)] cursor-pointer"
                onClick={() => jumpTo(move)}
              >
                {move}. {description}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
