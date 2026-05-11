import starImage from "../../assets/star-icon.webp";

export default function StarsBackground({ stars }) {
  return (
    <>
      {stars.map((star) => (
        <img
          key={star.id}
          src={starImage}
          alt="Star"
          className="absolute pointer-events-none select-none"
          draggable="false"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </>
  );
}
