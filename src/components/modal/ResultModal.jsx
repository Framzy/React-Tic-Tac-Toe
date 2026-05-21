import { motion, AnimatePresence } from "framer-motion";

export default function ResultModal({ result, isOpen, onReset }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              relative z-10
              w-xs md:w-full max-w-md 
              rounded-3xl
              border border-[var(--color-secondary)]
              bg-[var(--color-primary)]
              backdrop-blur-xl
              px-8 py-10
              gap-1
              flex flex-col items-center
              shadow-2xl
              text-center
            "
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              {result === "draw" ? "It's a Draw!" : `${result} Player Wins!`}
            </h2>

            <p className=" text-xs md:text-sm text-white/70">
              {result === "draw"
                ? "No one wins this time. Try again!"
                : "Amazing  Move! "}
            </p>

            <button
              onClick={onReset}
              className="
                mt-3
                rounded-xl
                bg-white/65
                px-6 py-3
                text-xs md:text-sm font-bold text-[var(--color-primary)]
                transition
                hover:bg-white
                cursor-pointer
              "
            >
              Play Again
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
