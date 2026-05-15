import { motion, AnimatePresence } from "framer-motion";

export default function ResultModal({ result, isOpen, onReset }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1,
              y: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="
              relative z-10
              w-full max-w-sm
              rounded-3xl
              border border-white/10
              bg-[var(--color-primary)]
              backdrop-blur-xl
              px-8 py-10
              shadow-2xl
              text-center
            "
          >
            <h2 className="text-3xl font-extrabold text-white">
              {result === "draw" ? "It's a Draw!" : `Player ${result} Wins!`}
            </h2>

            <p className="mt-2 text-sm text-white/70">Amazing move!</p>

            <button
              onClick={onReset}
              className="
                mt-8
                rounded-full
                bg-white/40
                px-6 py-3
                text-sm font-semibold text-white
                transition
                hover:bg-white/30
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
