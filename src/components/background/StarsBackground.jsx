import { motion } from "framer-motion";
import starImage from "../../assets/star-icon.webp";

export default function StarsBackground({ stars }) {
  return (
    <>
      {stars.map((star, index) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: star.delay,
            ease: "easeOut",
          }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        >
          <motion.img
            src={starImage}
            alt="Star"
            className="select-none"
            draggable={false}
            animate={{
              opacity: [star.opacity * 0.7, star.opacity, star.opacity * 0.7],
              rotate: index % 2 === 0 ? [-8, 8, -8] : [8, -8, 8],
            }}
            transition={{
              duration: 10,
              delay: star.delay,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}
