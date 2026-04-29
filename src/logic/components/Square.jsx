export default function Square({ value, onSquareClick }) {
  if (value === "X")
    value = <p className="text-4xl font-bold text-[#6F79FF]">X</p>;
  if (value === "O")
    value = <p className="text-4xl font-bold text-[#B451B6]">O</p>;

  return (
    <button
      className="w-12 h-12 p-8 flex items-center justify-center 
      bg-[#CCC3F9] hover:bg-white cursor-pointer border-0 rounded-xl
        focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-[var(--color-secondary)]"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
