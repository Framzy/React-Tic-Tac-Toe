export default function GameInfo({ jumpTo, moves }) {
  const moveHistory = moves.filter((m) => m.move > 0);

  return (
    <>
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
    </>
  );
}
