import gameIcon from "../assets/game-icon.webp";

export default function Status({ status }) {
  return (
    <>
      <div className="w-full flex items-center p-3 bg-[var(--color-primary)] border-2 border-[var(--color-secondary)] rounded-xl shadow-md">
        <img src={gameIcon} alt="Move History" className="w-6" />
        <p className="flex-1 text-white text-sm sm:text-md  text-center font-bold">
          {status}
        </p>
      </div>
    </>
  );
}
