import matchHistoryIcon from "../assets/match-history-icon.webp";

export default function GameInfo({ jumpTo, moves }) {
  const moveHistory = moves.filter((m) => m.move > 0);

  return (
    <>
      <div className="game-info flex flex-col items-center gap-2">
        <section>
          <div className="w-57 flex p-2 bg-[var(--color-primary)] border-2 border-[var(--color-secondary)] rounded-xl shadow-md">
            <img
              src={matchHistoryIcon}
              alt="Move History"
              className="w-6 h-6"
            />
            <p className="w-8/10 text-white text-md text-center font-bold">
              Match History
            </p>
          </div>
        </section>

        <section
          className="custom-scrollbar bg-[#FEF9FF] block text-center w-57 h-52 
            border-2 border-[var(--color-secondary)] shadow-md rounded-lg py-8"
        >
          {moveHistory.map(({ move, description }) => (
            <li key={move}>
              <button
                className="font-semibold p-1 text-[#7473F2] hover:text-[var(--color-primary)] cursor-pointer"
                onClick={() => jumpTo(move)}
              >
                {move}. {description}
              </button>
            </li>
          ))}
        </section>
      </div>
    </>
  );
}
